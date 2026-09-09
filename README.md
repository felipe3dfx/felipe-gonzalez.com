# felipe-gonzalez.com

Personal website of Felipe Gonzalez: who he is, how he works, what he has
done, and where to find him. Two pages, Spanish at
<https://felipe-gonzalez.com/> and English at
<https://felipe-gonzalez.com/en/>.

## Stack

Eleventy 3 with Nunjucks templates, Tailwind CSS v4 (built with
`@tailwindcss/cli`), Alpine.js from a pinned CDN, and a small vanilla canvas
script for the drifting dust fields.

## Content

All copy lives in `src/_data/es.json` and `src/_data/en.json`. Both pages are
rendered from the same layout (`src/_includes/home.njk`); the `lang` key in a
page's front matter selects which data file feeds it. Editing the JSON is the
only way to change what the site says.

Bracketed `[confirmar]` / `[confirm]` passages are placeholders waiting for a
real figure or example.

## Development

```sh
npm install
npm run dev
```

`npm run dev` starts the Tailwind watcher as a background job and then the
Eleventy dev server. Stop it with Ctrl-C and, if the watcher survives, with
`kill %1`.

## Build

```sh
npm run build
```

Compiles `src/styles.css` to `dist/css/site.css` and writes the site to
`dist/`. `OG=1 npm run build` additionally renders `/og/` to regenerate the
social card composition used to produce `src/img/og.png`.

## Deploy

Pushing to `main` runs `.github/workflows/publish.yml`, which runs
`npm ci && npm run build` and deploys `dist` to GitHub Pages.
