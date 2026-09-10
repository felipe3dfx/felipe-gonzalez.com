(function () {
  var canvas = document.getElementById("dust");
  if (!canvas) return;

  var ctx = canvas.getContext("2d", { alpha: false });
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function seeded(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var fields = [
    {
      seed: 0xf3e798, size: 1, color: "#2e2e2e", rate: 0.030, scroll: 0.04, pointer: 0.01,
      bands: [
        { count: 520, y: -0.05, slope: 0.72, amp: 0.10, freq: 4.6, phase: 0.4, spread: 0.080 },
        { count: 470, y: 0.86, slope: -0.60, amp: 0.09, freq: 3.9, phase: 2.1, spread: 0.070 },
        { count: 420, y: 0.34, slope: 0.34, amp: 0.14, freq: 2.7, phase: 4.0, spread: 0.055 },
        { count: 640, y: 0.24, slope: 0.52, amp: 0.07, freq: 3.4, phase: 5.2, spread: 0.095 }
      ]
    },
    {
      seed: 0x69a41c, size: 2, color: "#3b3b3b", rate: 0.015, scroll: 0.09, pointer: 0.02,
      bands: [
        { count: 240, y: 0.06, slope: 0.62, amp: 0.08, freq: 3.4, phase: 1.2, spread: 0.055 },
        { count: 200, y: 0.96, slope: -0.56, amp: 0.07, freq: 4.6, phase: 3.3, spread: 0.048 },
        { count: 380, y: 0.30, slope: 0.46, amp: 0.06, freq: 2.9, phase: 1.8, spread: 0.070 }
      ]
    },
    {
      seed: 0x2d7b04, size: 3, color: "#4a4a4a", rate: 0.0075, scroll: 0.16, pointer: 0.035,
      bands: [
        { count: 70, y: 0.20, slope: 0.50, amp: 0.06, freq: 2.6, phase: 0.9, spread: 0.042 },
        { count: 60, y: 0.84, slope: -0.32, amp: 0.05, freq: 3.7, phase: 2.6, spread: 0.036 },
        { count: 150, y: 0.36, slope: 0.38, amp: 0.05, freq: 3.2, phase: 4.4, spread: 0.055 }
      ]
    }
  ];

  function bandY(band, u) {
    return band.y + band.slope * u + band.amp * Math.sin(u * band.freq + band.phase);
  }

  function build(field) {
    var rand = seeded(field.seed);
    var points = [];
    for (var b = 0; b < field.bands.length; b++) {
      var band = field.bands[b];
      var made = 0;
      var guard = 0;
      while (made < band.count && guard < band.count * 40) {
        guard++;
        var u = rand();
        if (rand() > 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(u * 7.1 + band.phase * 2))) continue;
        var off = (rand() + rand() + rand() - 1.5) / 1.5;
        points.push({ band: band, u: u, off: off, drift: 0.7 + rand() * 0.7 });
        made++;
      }
    }
    return points;
  }

  var built = fields.map(build);
  var dpr = 1;
  var w = 0;
  var h = 0;
  var scrollY = window.scrollY || 0;
  var pointerTargetX = 0;
  var pointerX = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(elapsed) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var points = built[i];
      var shift = elapsed * field.rate + (scrollY / h) * field.scroll + pointerX * field.pointer;
      ctx.fillStyle = field.color;
      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        var u = (p.u + shift * p.drift) % 1.2;
        var v = bandY(p.band, u) + p.off * p.band.spread;
        if (v < -0.02 || v > 1.02) continue;
        ctx.fillRect(Math.round((u - 0.1) * w), Math.round(v * h), field.size, field.size);
      }
    }
  }

  var start = null;

  function frame(now) {
    if (start === null) start = now;
    pointerX += (pointerTargetX - pointerX) * 0.06;
    draw((now - start) / 1000);
    window.requestAnimationFrame(frame);
  }

  resize();

  if (reduced) {
    draw(0);
  } else {
    window.requestAnimationFrame(frame);
  }

  window.addEventListener("scroll", function () {
    scrollY = window.scrollY;
  }, { passive: true });

  if (!reduced) {
    window.addEventListener("pointermove", function (event) {
      if (event.pointerType !== "mouse") return;
      pointerTargetX = event.clientX / w - 0.5;
    }, { passive: true });

    document.documentElement.addEventListener("pointerleave", function () {
      pointerTargetX = 0;
    }, { passive: true });
  }

  var pending;
  window.addEventListener("resize", function () {
    window.clearTimeout(pending);
    pending = window.setTimeout(function () {
      resize();
      if (reduced) draw(0);
    }, 150);
  });
})();
