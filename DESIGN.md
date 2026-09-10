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
  lede:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.375rem, 1.05rem + 1.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.16em"
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

The site is a title screen, not a résumé page: one bitmap line holds still over a black field while dust drifts behind it, and everything else the visitor learns arrives by scrolling down through darker, quieter layers of the same void. There is no card, no rule, no divider anywhere in the build — every section boundary is made by vertical space and the lowercase tag that heads it (`about`, `now`, `work`, `how I decide`, `open source`, `stack`, `contact`) — since 2026-09-09 that tag is the section's `<h2>`, set at `lede` size in ivory at the top of a single column — never by a box. Rank and recency are told by value (how bright a color sits between void and ivory), not by containment.

The palette is a single achromatic ramp from black to warm-white bone, broken by exactly one hue: a signal amber reserved for state, not decoration. Depth is conveyed by three things working together — brightness step, letter-spacing, and drift rate — never by shadow. Two monospace faces divide the page between them: a bitmap mono (Departure Mono) owns the chrome — the hero name, every section heading tag, all metadata, the timeline rail — and a screen mono (JetBrains Mono) owns the reading copy. There is no sans and no serif anywhere in the build. See The Two-Voice Rule.

Confirmed rejections: no card/box/divider chrome, no drop shadows, no color outside the achromatic ramp plus the single amber, no icon glyphs (the pixel monogram in the header is drawn from `<rect>` primitives, not an icon font or SVG icon set; the mobile nav opens from a text `> menu` button, not a hamburger). The earlier "no second typeface" rejection was overridden by the owner on 2026-09-09, and the second face is a second *monospace*, not a sans — see The Two-Voice Rule.

**Key Characteristics:**
- Two monospace faces on a strict split: Departure Mono for chrome and metadata, JetBrains Mono for reading copy, across five roles (label / body / title / lede / display).
- An eight-step achromatic ramp (void → ash → dust → frost → haze → mist → ivory) plus one reserved amber.
- No shadows, no borders, no cards; depth is value + letter-spacing + drift, not elevation.
- A live canvas of three parallel dust fields drifting at different rates behind all content.
- One interactive object on the page: the hero portrait plate, which tilts in quantized steps under a mouse and swaps between dither and photograph on click (see Portrait Plate).
- `>` as the only recurring visual device: it marks every link-list item and every `now`/`experience` bullet, echoing a terminal prompt.

## Colors

An eight-step achromatic ramp from true black to warm bone, plus one reserved amber; the ramp itself carries almost all of the palette's expressive work.

### Primary
- **Signal amber** (`#FFB000`): the one hue in the system. Reserved to the blinking caret after the hero name and the current-role marker dot in Experience — the two places the page tells you "this is live, this is now." Also carries the site's interactive-state layer: link hover, `:focus-visible` outline, and `::selection` background, all confirmed in `src/styles.css`.

### Neutral
- **Void** (`#000000`): page background, `<html>` and `<body>`, the base the canvas paints over.
- **Ash** (`#1A1A1A`): darkest step above void; reserved, not yet used as a surface fill in the shipped markup (a token the ramp defines but the current build doesn't spend — kept because the scrollbar track and canvas fill sit at void, one step below it).
- **Dust** (`#4A4A4A`): scrollbar track/thumb resting state, and the name of the mid dust-canvas field.
- **Frost** (`#7B7B7B`): the recurring "meta" color — timestamps/locations in Experience, stack row keys, the `>` prefix glyph, oldest-tier bullet text.
- **Haze** (`#9C9A92`): mid-depth text — hero contact list, current/recent role bullets, early-career role titles.
- **Mist** (`#BDBAB0`): recent-past role titles (CTO, Senior Full Stack Developer, Director) in Experience.
- **Ivory** (`#E6E2D6`): reserved for headings and the primary action — hero name, hero lede, the seven section heading tags and the intro sentence under each, `decide`/OSS/role titles, and the email CTA. It is deliberately *not* used for reading copy (see The Reading-Value Rule).

### Named Rules
**The Amber Reserve Rule.** Amber marks state, never rank: it lights the hero caret and the current-role marker because those two things are alive right now, and it lights link hover, `:focus-visible`, and `::selection` because those are the browser's own state signals. It never appears as a decorative accent, a section marker, or a way to highlight a headline.

**The No-Chrome Rule.** No box-shadow, border, or background fill other than `void` appears anywhere in `src/styles.css` or the built HTML. Section, card, and list boundaries are made with spacing and text color alone. The 2026-09-09 additions hold to it without exception: the three new section intros are text at a larger size, the sharpened rhythm is padding, the portrait plate is a preflight-stripped `<button>` whose depth comes from a perspective transform rather than a shadow, and the header wordmark reveal toggles `visibility`. `grep -nE 'border-|shadow|rounded' src/styles.css src/_includes/*.njk` returns nothing.

**The Reading-Value Rule.** Value carries the heading/copy distinction that a second weight or a rule line would carry elsewhere: `ivory` means "this is a heading, a heading's intro sentence, or the primary action", `mist` and `haze` mean "this is reading copy". About paragraphs, `now` items and stack row values sit at `mist`; supporting copy (`work`'s rail intro, `decide` bodies, role challenge/did/result, OSS descriptions) sits at `haze`. Ivory reaching the 20px intro sentence is deliberate and is the second half of the Three-Tier Section Rule: 20px against 17px is too small a step to be read as a tier on size alone, so value carries it. Promoting body prose back to ivory flattens the hierarchy and is the specific mistake this rule exists to prevent.

**The Void-Fade Rule.** Where content scrolls under a sticky surface — the header and the trajectory rail — the boundary is a `void → transparent` linear-gradient pseudo-element about `2rem` tall, so copy dissolves into the field instead of being clipped against an invisible edge. A gradient of the page's own background is atmosphere, not chrome: it adds no border, no shadow, and no fill the eye can read as a container, so the No-Chrome Rule still holds without exception.

## Typography

**Display Font:** Departure Mono (with `ui-monospace, SFMono-Regular, Menlo, monospace` fallback)
**Reading Font:** JetBrains Mono (variable, weight axis 100–800, latin subset, with `ui-monospace, SFMono-Regular, Menlo, monospace` fallback)
**Label/Mono Font:** Departure Mono (identical stack, smaller size, wide tracking)

**Character:** Two self-hosted monospace faces (`fonts/DepartureMono-Regular.woff2`, `fonts/JetBrainsMono-Variable.woff2`) across five roles. Departure Mono is the voice of the machine and keeps the title-screen read; JetBrains Mono is the voice of the person and is the only face that carries long-form copy. JetBrains Mono was drawn for dark IDE backgrounds, which is exactly this page's condition — pure `#000000` at 17px. `body` in `@layer base` keeps Departure Mono as the document default, because the chrome is the majority; reading containers opt in with the `read` utility.

### Hierarchy
- **Display** (Departure Mono 400, `clamp(2.5rem, 5.1vw, 4.6rem)`, line-height 1.1, letter-spacing 0.01em): the hero name only. Typed on load via an Alpine `setInterval` reveal (skipped under `prefers-reduced-motion`), followed by the amber `.caret`.
- **Lede** (`clamp(1.375rem, 1.05rem + 1.4vw, 1.875rem)` — 22px at 320px, 30px from ~945px up; line-height 1.45, letter-spacing 0): the hero role line in JetBrains Mono 400, and in Departure Mono 400 the seven section heading tags and the contact email. This size role is the one place both voices meet: a section tag and an address are machine strings that need heading scale. The tags dropped the `label` role's 0.16em tracking here — that tracking exists to mark a 14px string as a tag, and at 30px it opens 4.8px gaps that read as a stretched banner rather than a heading, so tracking is 0 (`display` runs 0.01em at 40–73px, the same reasoning one step up). Section opening statements left this size on 2026-09-09 and now sit at `title`.
- **Title** (JetBrains Mono, 1.25rem/20px, line-height 1.5, letter-spacing 0): at weight 500, `decide` item titles, OSS repo names, and the selected role's title · company — the one place a weight step does any work. At weight 400, each section's intro sentence, in ivory: it borrows the size but not the weight, so the 500 step keeps meaning "item title" and the intro still reads as a sentence.
- **Body** (JetBrains Mono 400, 1.0625rem/17px, line-height 1.7, letter-spacing 0): all reading copy. Departure Mono borrows this size for stack row values and the rail's role titles only. Leading went 1.94 → 1.65 → 1.7: monospace runs wider per line and wants slightly more of it. Tracking is 0 because JetBrains Mono is already generously spaced; the 0.01em nudge that helped the previous sans read as loose here. The negative tracking on `lede` and `title` went the same way — negative tracking is a sans idiom and fights a monospace grid.
- **Label** (Departure Mono 400, 0.875rem/14px, line-height 1.45, letter-spacing 0.16em): timestamps/locations/stack lists, the header wordmark and nav, the `menu` button, stack row keys, prev/next controls, footer links. Section tags left this role on 2026-09-09 and are now `lede`-sized headings (see The Three-Tier Section Rule). Shrinking it from 16px is what lets `body` read as copy and `label` as a tag; wide tracking marks a string as a label, and case is left lowercase as written, not forced uppercase.

**Measure.** Reading containers cap at `max-w-[70ch]` (top-level prose), `max-w-[66ch]` (nested copy) and `max-w-[50ch]` (each section's intro sentence, which at 20px holds roughly the 600px block width the 30px lede had at 34ch). With both faces monospace, `ch` — the advance of "0" — is finally one character, so `Nch` really is N characters: 70ch renders 714px at 1440px. Measured at 1440px on 2026-09-09, wrapped body lines land **median 66 / max 71 characters in Spanish and median 68 / max 70 in English**; the intro sentence peaks at 50 (Spanish) / 51 (English); nested copy peaks at 66. The role-detail `<dl>` is capped at `max-w-[62ch]` instead, because it sits under a Departure Mono container whose wider advance makes 62 of its `ch` about 66 JetBrains characters — `ch` resolves against the container's own face, so a cap moves when the face does. The `68ch` caps on the contact and stack blocks are Departure Mono containers holding labels and addresses, not prose, and are left alone. Even with `ch` honest, measure it rendered, in both languages.

### Named Rules
**The Two-Voice Rule.** Two faces, one boundary, no negotiation. **Departure Mono owns chrome, structure and metadata:** the hero name, every section tag, nav and the mobile `menu` button, the language switcher, the wordmark, the whole timeline rail (years, role titles, companies), all meta (dates, location, stack lists), stack row keys, the `>` prefix device, prev/next controls, the footer, and the email CTA. **JetBrains Mono owns reading copy only:** about paragraphs, `now` items, every section intro sentence, `decide` titles and bodies, the role detail panel's challenge/did/result copy, OSS descriptions, and the contact lede. Nothing else. If a new string is a label, a number, a date or a control, it is Departure Mono; if a visitor reads it as a sentence, it is JetBrains Mono.

Both voices are monospace, so the site carries **no sans and no serif at all**. The boundary is therefore not mono-versus-prose-face but bitmap-versus-screen: Departure Mono's 1-bit pixel grid against JetBrains Mono's smooth outlines at the same 17px. Because both faces sit on a monospace grid at identical sizes, the Experience depth ladder still reads as depth (verified: frost/frost/frost → haze → mist → ivory at 1.02px → 0.68px → 0.34px → normal tracking) and the `>` prefix in Departure Mono still aligns to the JetBrains text beside it — the prefix lives in its own `1.7em` grid column, so the two faces' different advances never make it drift.

*Override record.* This design originally carried a One-Face Rule and listed "no second typeface" as a confirmed rejection. The owner overrode it on **2026-09-09** following a UX review: bitmap monospace at 17px with a 1.94 line-height is genuinely unreadable for long-form copy, and with `label` at 16px against `body` at 17px nothing on the page read as a heading. The rejection was a style preference; legibility of the résumé copy is the product.

The same day, after reviewing **omarchy.org** as a reference, the owner authorized replacing the reading face with a second monospace. The reference runs a monospace as its body default and reserves a sans for headings only — the inverse of what this site had built — and the owner adopted the premise rather than the design: **two monospace faces, no sans anywhere.** The influence is on the mechanism, not the look. This matters beyond taste, because a second mono bends the original "no second typeface" rejection *less* than a sans did: the page keeps one uninterrupted monospace grid, and the second voice differs by rendering model (bitmap versus outline) rather than by class of letterform. Every other rejection in this system stands.

## Layout

The page is a single column capped at `max-w-[1600px]`, centered, with responsive side padding (`px-6` mobile → `px-10` md → `px-16` lg). Every content section below the hero is a single column: the lowercase tag heading first, then the intro sentence capped at `max-w-[50ch]`, then body copy capped at `max-w-[70ch]` (prose) or `max-w-[66ch]` (nested lists) for line-length control (see Measure). The narrow label column (`8rem` at `md`, `11rem` at `lg`) that held the tag was retired on 2026-09-09 when the tag became the heading — with nothing left in it the column was dead space, and the `md:col-start-2` placements in `work` that paired with it (role-detail panel, prev/next controls) went with it. Sections are separated by bottom padding alone (`pb-24`, hero `pb-10`/`pt-10`–`pt-16`) — there is no horizontal rule between them.

The hero breaks the shared grid on purpose: at `lg` it's a two-column split (`minmax(0,1fr)` name/role block + a fixed `448px` profile-image column), min-height `90svh`, with the contact-link row pinned to the section's bottom edge via `justify-between`. This is the one deliberate exception to the single-column rhythm, because the hero is the title screen and everything after it is the credits.

Experience rows use a three-way grid at `lg` (a `1.6rem` marker column, the title/meta content, and a right-aligned auto column for dates) that collapses to two rows on mobile; the current-role marker dot only exists in the first `<li>`.

A fixed, full-viewport `<canvas id="dust">` sits at `z-index: 0` behind a `position: relative; z-index: 10` content wrapper — the dust field never competes with text for stacking order.

The header is `sticky top-0 z-30` and one row at every breakpoint, `h-14` on mobile and `h-16` from `md`. To hold that single row at the narrowest widths the wordmark is `hidden sm:inline`, leaving the pixel monogram alone below 640px: at 375px the monogram, wordmark, language switcher and `> menu` button together measured 436px against 312px of available width, so the wordmark is the part that yields and the ownable mark is the part that stays. That height is published to CSS as `--header-h` (`3.5rem`, `4rem` at `md`) so nothing downstream has to guess it: the `scroll-offset` utility sets `scroll-margin-top: calc(var(--header-h) + 2rem)` on every anchored section, and the sticky trajectory rail parks at exactly `top: var(--header-h)`. When the header height changes, both follow.

### Named Rules
**The Three-Tier Section Rule.** Every content section states itself three times, in a fixed order down one column: the lowercase tag as the `<h2>` at `lede` size in ivory, then the opening sentence as a `title`-size `<p>` in ivory, then the body copy at `body` size below ivory (`mist` for top-level prose, `haze` for supporting copy). **Size carries the first split and value carries the second** — 30px → 20px is a 1.5× step the eye reads unaided, while 20px → 17px is too small a step to work alone, so ivory → mist does that work. Measured at 1440px: `<h2>` 30px `#E6E2D6`, intro 20px `#E6E2D6`, body 17px `#BDBAB0` (`#9C9A92` where the body is supporting copy). At 320–430px the `lede` clamp bottoms out at 22px against a fixed 20px `title`, so the ladder is still strictly decreasing but the first step nearly closes and the phone read leans on value: 22 → 20 → 17.

Revised **2026-09-09**: the tag had been a 14px `label` in the margin column and the opening sentence a 30px `lede` in the content column. The owner read the *tag*, not the sentence, as the section's title, and said twice that it looked too small and too dark against the copy — so the tag became the heading at lede size in ivory and the sentence dropped to a supporting intro.

Each section now opens with exactly one heading and nothing above it. A small label set directly above a large heading is a kicker/eyebrow, which this project's floor bans outright — which is why the tag was promoted rather than duplicated. `stack` carries the same three tiers as every other section; its third tier is key/value rows instead of prose.

**The Rhythm Ratio Rule.** The gap between two topics must be an order of magnitude larger than the gap between two paragraphs, because that contrast — not the absolute space — is the pre-attentive cue a reader chunks the page with. Shipped: **96px between sections (`pb-24`) against 12px between paragraphs (`space-y-3`) — a ratio of 8:1**, up from 4:1 (80px / 20px). The heading, its intro and the body fill the intermediate steps: `mt-4` / 16px from the `<h2>` to its intro, because those two read as one block, then `mt-8` / 32px from the intro to the body — so the ladder reads 96 → 32 → 16 → 12. Groupings that must read as single units keep a smaller internal gap than the gap between items: `decide` items are `space-y-10` apart with `mt-2` inside, the role-detail `dl` is `space-y-6` with the `dd` tight under its `dt`, and OSS entries are `space-y-6` apart with `mt-1` inside.

## Elevation & Depth

The system carries zero shadows and zero elevation tokens. Depth is conveyed by three coordinated signals instead: **value** (position on the void→ivory ramp), **letter-spacing** (denser tracking reads as further/older), and **drift rate** (the parallax canvas). Nothing lifts, glows, or casts a shadow to indicate hierarchy.

The dust canvas (`js/dust.js`) renders three particle fields at different pixel sizes and drift rates: 1px dust at rate 0.030/frame-second, 2px dust at 0.015 (half), 3px dust at 0.0075 (a quarter of the first, half of the second) — each step slower as it steps forward in the array. `prefers-reduced-motion` freezes the canvas on its first frame and disables the caret and link-color transitions.

### Named Rules
**The Value-Not-Shadow Rule.** Hierarchy and recency are told by how light a text color sits on the achromatic ramp (ivory → mist → haze → frost) plus letter-spacing, never by shadow, border, or background elevation.

**The Experience Depth-Ladder Rule.** In the Experience list, each role's title steps one shade darker than the role above it as it recedes into the past — current role in ivory, the two most recent past roles in mist, the two earliest in haze, one entry (Mottif) reaching frost — and each role's bullet copy sits one ramp-step below its own title color (ivory/mist titles pair with haze bullets, haze titles pair with frost bullets). Letter-spacing on the title also widens slightly with each step back (0 → 0.02em → 0.04em → 0.06em → 0.08em), reinforcing the same "further away" read.

## Shapes

No rounded corners, no borders, no clipping appear anywhere in the build — `border-radius` is never set. The only geometric device is pixel-precision: the header monogram is drawn from 1-unit `<rect>`s at `shape-rendering: crispEdges`, and the profile portrait (`img/profile-dither.png`, a pre-dithered raster) switches to `image-rendering: pixelated` at `≥1024px` via the `.plate` utility, staying `auto` (smoothed) below that breakpoint. The plate's 3D tilt does not cost that crispness: screenshot-diffed at 1440px, the neutral plate contains exactly two colours (`#000000` and `#E6E2D6`) and the plate at its maximum `rotateX(-6deg) rotateY(6deg)` contains 173 intermediate pixels out of 156,800 — 0.11%, all of them in a 10px strip along the rotated silhouette's edge. The dither field itself stays bit-exact, so Chrome is antialiasing the element boundary and still sampling the texture nearest-neighbour. Silhouettes are otherwise plain rectangles of text and image; there is no card outline anywhere to describe.

## Components

### Links (inline)
- **Style:** inherit color (ivory in body text), underline with `text-decoration-color` at 40% opacity of currentColor, 5px underline offset, 1px thickness.
- **Hover / Focus:** color and underline both shift to signal amber over 240ms `cubic-bezier(0.16, 1, 0.3, 1)`; `:focus-visible` additionally gets a 2px amber outline, 3px offset. Transitions are removed under `prefers-reduced-motion`.

### Prompt-Prefix List Item (signature component)
The recurring `>` glyph (`.prefix`, colored frost, `0.7em` right margin) that opens every contact link, footer link, and `now`/`experience` bullet. It is the page's one visual motif carried over from its terminal/title-screen premise — not a bullet icon, a literal ASCII character in Departure Mono, sized and spaced identically wherever it appears.

### Portrait Plate (the page's one interactive object)
- **Structure:** a real `<button type="button">` wrapping the `<img>`, so the object is focusable and keyboard-operable. It carries a translated `aria-label` naming the *action* (`hero.plate.label`) and `aria-pressed` carrying the *state*; the `alt` swaps with the state too (`hero.plate.altDither` / `hero.plate.altPhoto`). Tailwind's preflight already strips a button's background, border and radius, so no chrome arrives with it.
- **Quantized tilt (hover, mouse only).** `pointermove` writes the pointer's normalized offset from the plate's centre into `--rx` / `--ry`, which a `transform: perspective(900px) rotateX() rotateY()` consumes; `pointerleave` removes both. The rotation is **quantized to five steps per axis at 3° each (−6°…+6°)** and transitions on `steps(2, end)`. This is deliberate: the reference behaviour this was derived from uses spring physics, and a spring is the wrong physics for a bitmap world whose caret already blinks on `steps(1, end)`. Stepped rotation belongs here; a spring would read as borrowed. Gated three ways — `event.pointerType !== 'mouse'` returns early, the whole utility is nested in `@variant pointer-fine` (and checked again in JS), and `@variant motion-reduce` sets `transform: none`. Touch devices get nothing. No `box-shadow` fakes the depth; the perspective transform is the only depth cue.
- **Dither ↔ photograph (click).** Clicking swaps `img/profile-dither.png` (448×445) for `img/profile.webp` (588×584) and back, with correct `width`/`height` per state. The two share a 1.007 aspect ratio and render at one width with `height: auto`, so the swap measures a 0.06px box change — no layout shift. The cut is hard, never a crossfade: this world changes state on a frame boundary. `image-rendering: pixelated` is scoped to the dither state only — the `plate` utility is a static class flipped off by `:class="{ plate: !photo }"` — because nearest-neighbour would alias the 588px photograph down into its 448px box. The photograph is prefetched in `x-init` so the first click has no blank frame. The gesture means something — `PRODUCT.md` records that the owner may switch to the original photo, so the plate lets a visitor reveal the person behind the pixels — and unlike the tilt it needs no motion and works on touch.

### Header Wordmark Reveal (past-hero state)
- **Behavior:** the `<h1>` and the header wordmark both state the name in the first viewport, which is redundant, so the wordmark appears only once the hero has scrolled out. `x-intersect:leave` / `x-intersect:enter` on the hero section drive a `pastHero` flag on the root `x-data`; the pixel monogram is visible at every scroll position and every width.
- **Constraint:** the inline nav is `xl:block` (1280px), not `md:`. Measured on 2026-09-09: monogram + wordmark (252px) + nav (697px on one line) + language switcher (79px) + padding and gaps needs **1220px**, so between 768px and 1220px the nav wrapped to two rows inside a fixed 64px header. The `> menu` disclosure therefore serves every width below 1280px, and the nav `<ul>` is `flex-nowrap` so it can never wrap again. The wordmark stays `hidden sm:inline` — below 640px it never appears at all, because at 375px the monogram, wordmark, language switcher and `> menu` button together overflow the row. The reveal is a static `invisible` class flipped by an Alpine `:class` object, the same visibility-not-display pattern the nav prefix uses, so the wordmark's space is reserved in both states and the header row never reflows (measured: row height 56px/64px identical either way, no horizontal overflow at 320/375/414/768/1440).

### Caret & Current-Role Marker (signature component)
`.caret`: a `0.52em × 0.82em` solid amber block after the hero name, blinking on a hard 1.06s `steps(1,end)` cycle (visible 62%, hidden 38% — a hard-edged, non-eased blink matching the bitmap aesthetic). `.marker-signal`: a `0.6em` solid amber square marking the current-role row only in Experience. Both are the sole carriers of amber-as-depth-signal (see The Amber Reserve Rule).

### Navigation / Link Rows
- **Style:** flat `<ul>` of links at `label` size; the hero row uses ivory for Email (the primary action) and haze for the rest, and the footer repeats the same five links entirely in frost.
- **Active state:** the header nav carries the `>` prefix on the **active** section only, and it travels as `x-intersect` updates `active`. Prefixing every item made the row read as a breadcrumb (`> about > now > work …`); one travelling marker reads as a position instead. Inactive items are haze with no visible prefix, the active item is ivory with it. The prefix is toggled with `visibility` (a static `invisible` class flipped by an Alpine `:class` object), not `display`, so items never shift horizontally as the marker moves and nothing flashes before Alpine boots.

### Mobile Nav Disclosure
- **Style:** a text button, not an icon — `> menu` in `label`-size Departure Mono, swapping to `> close` when open. `DESIGN.md` bans icon glyphs, so a hamburger was never available; the terminal device does the job and belongs to the world. Below `md` it replaces the inline nav; from `md` up it is hidden and the inline list returns.
- **Behavior:** real `aria-expanded` / `aria-controls` against the panel's `id`. The panel is full-width `bg-void`, one item per line, and closes on link click, `Escape`, and click-outside. Visibility is a static `hidden` class toggled by an Alpine `:class` object rather than `x-show`, so the closed state is correct in the served HTML before Alpine boots and needs no `x-cloak`.

### Sticky Trajectory Rail
- **Style:** the horizontal year rail sticks at `top: var(--header-h)` (`z-20`, `bg-void`) so the reader never loses their place in the timeline while the role detail scrolls underneath, and it releases when the Experience section ends. A void-fade gradient below it dissolves the passing copy.
- **Constraint:** `rail-dots` is absolutely positioned against the wrapper's border box, so its offset is driven by `--rail-dots-top` (`calc(33px + 2rem)`, the `2rem` being the wrapper's own top padding) to stay centered on the `rail-tick` squares. Change the wrapper's padding and that custom property must change with it — verified in the browser at both `--header-h` values, not by arithmetic. `position: sticky` also requires every ancestor to keep `overflow: visible`; the `overflow-x-auto` lives on the `<ol>` inside the sticky wrapper, which is why it works.

## Do's and Don'ts

### Do:
- **Do** keep every new color on the eight-step void→ivory ramp; if a new state needs a hue, it is amber or it doesn't ship.
- **Do** put new reading copy at `mist` or `haze` and reserve `ivory` for headings, a heading's intro sentence, and the primary action, per The Reading-Value Rule.
- **Do** signal recency and rank with ramp position and letter-spacing, per the Experience Depth-Ladder Rule, before reaching for any other device.
- **Do** open new link-list or bullet items with the `>` prefix in frost, matching every existing list on the page.
- **Do** keep the dust canvas at `z-index: 0` under a `z-index: 10` content wrapper, and respect `prefers-reduced-motion` for any new motion.

### Don't:
- **Don't** add a box-shadow, border, background card, or divider rule anywhere; the No-Chrome Rule has no exceptions in the shipped build. Where a sticky surface needs a boundary, use the void-fade gradient, never a line.
- **Don't** introduce a *third* type family, don't introduce a sans or a serif, and don't move a string across the Two-Voice boundary — a label rendered in JetBrains Mono or a paragraph rendered in Departure Mono breaks the one distinction the page relies on.
- **Don't** spend amber on anything that isn't the caret, the current-role marker, or a browser interaction state (hover/focus/selection) — it is not available as a highlight or accent color.
- **Don't** round a corner. No element in the build carries `border-radius`.
