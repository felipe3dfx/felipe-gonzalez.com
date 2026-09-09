---
name: Felipe Gonzalez — felipe-gonzalez.com
description: A cracktro title screen for a person — one still bitmap line over an emissive void, rank told by depth, never by boxes.
colors:
  void: "#000000"
  ash: "#1A1A1A"
  dust: "#4A4A4A"
  frost: "#7B7B7B"
  haze: "#9C9A92"
  mist: "#BDBAB0"
  ivory: "#E6E2D6"
  signal: "#FFB000"
typography:
  display:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.5rem, 5.1vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "33px"
  label:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0.14em"
components:
  link-inline:
    textColor: "{colors.ivory}"
  link-inline-hover:
    textColor: "{colors.signal}"
  caret:
    backgroundColor: "{colors.signal}"
    width: "0.52em"
    height: "0.82em"
  marker-current-role:
    backgroundColor: "{colors.signal}"
    width: "0.6em"
    height: "0.6em"
---

# Design System: Felipe Gonzalez — felipe-gonzalez.com

## Overview

**Creative North Star: "The Cracktro Void"**

The site is a title screen, not a résumé page: one bitmap line holds still over a black field while dust drifts behind it, and everything else the visitor learns arrives by scrolling down through darker, quieter layers of the same void. There is no card, no rule, no divider anywhere in the build — every section boundary is made by vertical space and a `label`-sized left-column tag (`about`, `now`, `experience`, `open source`, `stack`, `education`), never by a box. Rank and recency are told by value (how bright a color sits between void and ivory), not by containment.

The palette is a single achromatic ramp from black to warm-white bone, broken by exactly one hue: a signal amber reserved for state, not decoration. Depth is conveyed by three things working together — brightness step, letter-spacing, and drift rate — never by shadow. The one font is a bitmap monospace (Departure Mono) at three sizes; there is no serif, no display face, no second family anywhere in the shipped HTML.

Confirmed rejections: no card/box/divider chrome, no drop shadows, no second typeface, no color outside the achromatic ramp plus the single amber, no icon glyphs (the pixel monogram in the header is drawn from `<rect>` primitives, not an icon font or SVG icon set).

**Key Characteristics:**
- One bitmap monospace face at three sizes (label / body / display), no display serif.
- An eight-step achromatic ramp (void → ash → dust → frost → haze → mist → ivory) plus one reserved amber.
- No shadows, no borders, no cards; depth is value + letter-spacing + drift, not elevation.
- A live canvas of three parallel dust fields drifting at different rates behind all content.
- `>` as the only recurring visual device: it marks every link-list item and every `now`/`experience` bullet, echoing a terminal prompt.

## Colors

An eight-step achromatic ramp from true black to warm bone, plus one reserved amber; the ramp itself carries almost all of the palette's expressive work.

### Primary
- **Signal amber** (`#FFB000`): the one hue in the system. Reserved to the blinking caret after the hero name and the current-role marker dot in Experience — the two places the page tells you "this is live, this is now." Also carries the site's interactive-state layer: link hover, `:focus-visible` outline, and `::selection` background, all confirmed in `src/styles.css`.

### Neutral
- **Void** (`#000000`): page background, `<html>` and `<body>`, the base the canvas paints over.
- **Ash** (`#1A1A1A`): darkest step above void; reserved, not yet used as a surface fill in the shipped markup (a token the ramp defines but the current build doesn't spend — kept because the scrollbar track and canvas fill sit at void, one step below it).
- **Dust** (`#4A4A4A`): scrollbar track/thumb resting state, and the name of the mid dust-canvas field.
- **Frost** (`#7B7B7B`): the recurring "meta" color — timestamps/locations in Experience, the `about`/`now`/etc. section labels, the `>` prefix glyph, oldest-tier bullet text.
- **Haze** (`#9C9A92`): mid-depth text — hero contact list, current/recent role bullets, early-career role titles.
- **Mist** (`#BDBAB0`): recent-past role titles (CTO, Senior Full Stack Developer, Director) in Experience.
- **Ivory** (`#E6E2D6`): primary text color for `<body>`; hero name, hero role line, About/Now copy, current-role title, top link-list items.

### Named Rules
**The Amber Reserve Rule.** Amber marks state, never rank: it lights the hero caret and the current-role marker because those two things are alive right now, and it lights link hover, `:focus-visible`, and `::selection` because those are the browser's own state signals. It never appears as a decorative accent, a section marker, or a way to highlight a headline.

**The No-Chrome Rule.** No box-shadow, border, or background fill other than `void` appears anywhere in `src/styles.css` or `index.html`. Section, card, and list boundaries are made with spacing and text color alone.

## Typography

**Display Font:** Departure Mono (with `ui-monospace, SFMono-Regular, Menlo, monospace` fallback)
**Body Font:** Departure Mono (same stack; there is no second family)
**Label/Mono Font:** Departure Mono (identical stack, smaller size, wide tracking)

**Character:** One bitmap monospace face, self-hosted (`fonts/DepartureMono-Regular.woff2`), used at exactly three sizes. The pairing has no contrast of family or weight — every distinction between hero, body, and label is size, tracking, and color, which is what keeps the page reading as a title screen rather than a document.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 5.1vw, 4.6rem)`, line-height 1.1, letter-spacing 0.01em): the hero name only. Typed on load via an Alpine `setInterval` reveal (skipped under `prefers-reduced-motion`), followed by the amber `.caret`.
- **Body** (400, 17px, line-height 33px): all prose, list items, contact links, stack values — the workhorse size.
- **Label** (400, 16px, line-height 22px, letter-spacing 0.14em): section tags (`about`, `now`, …), timestamps/locations, the header wordmark, stack row keys. Wide tracking is what marks a string as a label rather than body copy; case is left lowercase as written, not forced uppercase.

### Named Rules
**The One-Face Rule.** Every piece of type on the page, from the hero name to a footer link, renders in Departure Mono. A second family is never introduced for contrast; contrast comes from size, tracking, and the color ramp.

## Layout

The page is a single column capped at `max-w-[1600px]`, centered, with responsive side padding (`px-6` mobile → `px-10` md → `px-16` lg). Every content section below the hero shares one grid shape: a narrow label column (`8rem` at `md`, `11rem` at `lg`) holding the lowercase section tag, beside a content column capped at `max-w-[68ch]` (prose) or `max-w-[62ch]` (nested lists) for line-length control. Sections are separated by bottom padding alone (`pb-20`, hero `pb-10`/`pt-14`–`pt-20`) — there is no horizontal rule between them.

The hero breaks the shared grid on purpose: at `lg` it's a two-column split (`minmax(0,1fr)` name/role block + a fixed `448px` profile-image column), min-height `90svh`, with the contact-link row pinned to the section's bottom edge via `justify-between`. This is the one deliberate exception to the label-column rhythm, because the hero is the title screen and everything after it is the credits.

Experience rows use a three-way grid at `lg` (a `1.6rem` marker column, the title/meta content, and a right-aligned auto column for dates) that collapses to two rows on mobile; the current-role marker dot only exists in the first `<li>`.

A fixed, full-viewport `<canvas id="dust">` sits at `z-index: 0` behind a `position: relative; z-index: 10` content wrapper — the dust field never competes with text for stacking order.

## Elevation & Depth

The system carries zero shadows and zero elevation tokens. Depth is conveyed by three coordinated signals instead: **value** (position on the void→ivory ramp), **letter-spacing** (denser tracking reads as further/older), and **drift rate** (the parallax canvas). Nothing lifts, glows, or casts a shadow to indicate hierarchy.

The dust canvas (`js/dust.js`) renders three particle fields at different pixel sizes and drift rates: 1px dust at rate 0.030/frame-second, 2px dust at 0.015 (half), 3px dust at 0.0075 (a quarter of the first, half of the second) — each step slower as it steps forward in the array. `prefers-reduced-motion` freezes the canvas on its first frame and disables the caret and link-color transitions.

### Named Rules
**The Value-Not-Shadow Rule.** Hierarchy and recency are told by how light a text color sits on the achromatic ramp (ivory → mist → haze → frost) plus letter-spacing, never by shadow, border, or background elevation.

**The Experience Depth-Ladder Rule.** In the Experience list, each role's title steps one shade darker than the role above it as it recedes into the past — current role in ivory, the two most recent past roles in mist, the two earliest in haze, one entry (Mottif) reaching frost — and each role's bullet copy sits one ramp-step below its own title color (ivory/mist titles pair with haze bullets, haze titles pair with frost bullets). Letter-spacing on the title also widens slightly with each step back (0 → 0.02em → 0.04em → 0.06em → 0.08em), reinforcing the same "further away" read.

## Shapes

No rounded corners, no borders, no clipping appear anywhere in the build — `border-radius` is never set. The only geometric device is pixel-precision: the header monogram is drawn from 1-unit `<rect>`s at `shape-rendering: crispEdges`, and the profile portrait (`img/profile-dither.png`, a pre-dithered raster) switches to `image-rendering: pixelated` at `≥1024px` via the `.plate` utility, staying `auto` (smoothed) below that breakpoint. Silhouettes are otherwise plain rectangles of text and image; there is no card outline anywhere to describe.

## Components

### Links (inline)
- **Style:** inherit color (ivory in body text), underline with `text-decoration-color` at 40% opacity of currentColor, 5px underline offset, 1px thickness.
- **Hover / Focus:** color and underline both shift to signal amber over 240ms `cubic-bezier(0.16, 1, 0.3, 1)`; `:focus-visible` additionally gets a 2px amber outline, 3px offset. Transitions are removed under `prefers-reduced-motion`.

### Prompt-Prefix List Item (signature component)
The recurring `>` glyph (`.prefix`, colored frost, `0.7em` right margin) that opens every contact link, footer link, and `now`/`experience` bullet. It is the page's one visual motif carried over from its terminal/title-screen premise — not a bullet icon, a literal ASCII character in Departure Mono, sized and spaced identically wherever it appears.

### Caret & Current-Role Marker (signature component)
`.caret`: a `0.52em × 0.82em` solid amber block after the hero name, blinking on a hard 1.06s `steps(1,end)` cycle (visible 62%, hidden 38% — a hard-edged, non-eased blink matching the bitmap aesthetic). `.marker-signal`: a `0.6em` solid amber square marking the current-role row only in Experience. Both are the sole carriers of amber-as-depth-signal (see The Amber Reserve Rule).

### Navigation / Link Rows
- **Style:** flat `<ul>` of `>`-prefixed links, no active/current state beyond the hero's implicit link list; hero row uses ivory for Email (the primary action) and haze for the rest, footer repeats the same five links entirely in frost.

## Do's and Don'ts

### Do:
- **Do** keep every new color on the eight-step void→ivory ramp; if a new state needs a hue, it is amber or it doesn't ship.
- **Do** signal recency and rank with ramp position and letter-spacing, per the Experience Depth-Ladder Rule, before reaching for any other device.
- **Do** open new link-list or bullet items with the `>` prefix in frost, matching every existing list on the page.
- **Do** keep the dust canvas at `z-index: 0` under a `z-index: 10` content wrapper, and respect `prefers-reduced-motion` for any new motion.

### Don't:
- **Don't** add a box-shadow, border, background card, or divider rule anywhere; the No-Chrome Rule has no exceptions in the shipped build.
- **Don't** introduce a second type family or a display-weight variant; the One-Face Rule means every size difference is expressed through the existing `label`/`body`/`display` scale.
- **Don't** spend amber on anything that isn't the caret, the current-role marker, or a browser interaction state (hover/focus/selection) — it is not available as a highlight or accent color.
- **Don't** round a corner. No element in the build carries `border-radius`.
