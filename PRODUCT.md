# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + Tailwind CSS v4 (`@tailwindcss/cli`, theme in CSS via `@theme`) + Alpine.js from a pinned CDN. Animations in native CSS. No htmx (no server). No site generator for now; Eleventy is the agreed step if a blog or navigable sections are added. Built and deployed with GitHub Actions to GitHub Pages at felipe-gonzalez.com. Replaces the previous Quarto site.

## Users

Two audiences weighted equally:

- Recruiters, founders and clients evaluating whether to hire or work with Felipe. Their job: understand his profile fast and decide to reach out.
- Developers and the tech community arriving from X, GitHub or a talk. Their job: learn how he thinks and follow his work.

## Product Purpose

Felipe Gonzalez's personal website: who he is, how he works, what he has done (résumé) and where to find him. Success is a visitor who, within seconds, knows he is a Django-centered engineering leader in Colombia, reads enough to trust him, and follows one of the contact links.

## Positioning

An engineering leader who has spent over a decade shipping with Python and Django and eight years leading the people who ship it, now leading engineering at Grupo ilao (one of Colombia's top five insurance brokerages). Also a practitioner of AI-assisted development who publishes agent skills for Django, HTMX, Alpine.js, Tailwind and pytest.

## Operating Context

- One page in two languages: Spanish at `/` and English at `/en/`. Read on desktop and mobile, often from a LinkedIn, X or GitHub profile link.
- Content sections agreed with the user: hero with profile photo and social links; About (warm, first person); Now (what he is working on, generalized); Experience (six entries); Open source (three repos); Stack (backend, frontend, infra).
- Language of the site: English. Working language with the owner: Spanish.

## Capabilities and Constraints

- Confidential: work at Grupo ilao is described in general terms only. Never mention the legacy .NET migration, the internal AI assistant's internals, or specific integrations.
- Do not mention Gentle-AI or AI Gentle Stack.
- Privacy: the site states country only. Never publish the owner's town, region, street-level location, or working modality (remote/on-site) — in copy, metadata, or JSON-LD. This applies to repository documents too, since the repository is public.
- Experience omits C.I Cocinas and Arcadia by the owner's decision.
- No recognitions/certifications section.
- Social links to include: GitHub (felipe3dfx), LinkedIn (felipe3dfx), X (@felipezul), YouTube (@cto_gamer), email (felipe3dfx@gmail.com).
- Open source to feature: felipe3dfx/skills, felipe3dfx/pi-engram, felipe3dfx/pi-workflow.
- Accessibility: respect `prefers-reduced-motion`. The site is a single dark world by the owner's choice of the Cracktro Void direction (2026-09-09); no light theme is owed.

## Brand Commitments

- Name: Felipe Gonzalez. Domain: felipe-gonzalez.com.
- The profile photo `src/img/profile.webp` is the source image; the site shows `src/img/profile-dither.png`, an ordered-dither plate derived from it (the owner may switch back to the original).
- No existing logo or brand. The owner wants to start a personal brand; the site should establish a simple, ownable mark (monogram or wordmark) usable as favicon and identity. The old favicon was replaced by the FG pixel monogram (`src/img/favicon.svg`).
- Character: sober with character. Clean and professional, with one clear visual decision that makes it memorable. Must not read as a template.
- Voice: warm, direct, first person. Existing approved copy is in the conversation record and is the source for the build.

## Evidence on Hand

- `src/img/profile.webp`: profile photo (source). `src/img/og.png`: social card rendered from `src/og.njk`.
- Résumé facts from LinkedIn (2026-09-09): Tech Lead at Grupo ilao (Oct 2024 to present); Axiacore CTO (Jan 2018 to Sep 2024) and Senior Full Stack Developer (2016 to 2017); Director of Technical Development at lequar (2014 to 2016); Web Developer at Mass Digital (2014); Web Developer at Mottif (2013 to 2014). Multimedia Engineering, Universidad Militar Nueva Granada, 2007 to 2012. Based in Colombia.
- Public repos on GitHub as listed above.
- No testimonials, metrics beyond LinkedIn's, or press. Do not fabricate any.

## Product Principles

- Clarity over cleverness: a visitor understands who Felipe is in one viewport.
- Warmth is the differentiator: the copy sounds like a person, and the design should too.
- One memorable decision, not many effects.
- Grow in layers: today one page; the structure must not block a future blog.
- Honest content only: everything on the page is verifiable.
