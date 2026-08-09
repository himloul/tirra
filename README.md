# tirra

Single-column Hugo theme for reading. Narrow text column, warm light and dark palettes, and a small set of page features. No CSS or JavaScript framework.

## Features

- Dark mode; default follows `prefers-color-scheme`, toggle saved to `localStorage`
- Full-text search (`Ctrl+K`/`Cmd+K`) over the JSON page index emitted by the home output, matched with Fuse.js
- Table of contents in a collapsed `<details>` when a page has headings
- Reading time, plus the last-modified date when a page has one
- Reading progress bar and back-to-top button
- Copy button on code blocks
- Image lightbox
- Callouts: blockquotes starting with `> [!type]` render as labeled note, tip, warning, etc.
- Mermaid diagrams with full-screen view, loaded only on pages that contain a `mermaid` code fence
- KaTeX math, rendered server-side (no JavaScript); the stylesheet loads only on pages that contain math
- External links open in a new tab (`target="_blank"` + `rel="noopener"`) and get a small arrow marker
- Progressive web app: emitted web app manifest, installable from the browser, and an offline service worker (network-first for pages, so nothing goes stale online)
- Print stylesheet
- Colors, fonts, and content width set from the site config

## Install

Copy `themes/tirra` into your site's `themes/` directory (or add it as a submodule), then in `hugo.toml`:

```toml
theme = "tirra"
```

## Demo site

The `exampleSite/` directory is a working demo of every feature. From the theme root, link the theme into the example site and run it:

```sh
ln -s ../.. exampleSite/themes/tirra
hugo server -s exampleSite
```

The symlink name must match the theme name (`tirra`). It is not committed; the CI workflow creates it for you.

## Configuration

```toml
baseURL = "https://example.org/"
title = "Your Name"
theme = "tirra"
enableRobotsTXT = true

[outputs]
  home = ["HTML", "RSS", "JSON", "WEBMANIFEST"]

[outputFormats.WEBMANIFEST]
  mediaType = "application/manifest+json"
  baseName = "manifest"
  isHTML = false
  noUgly = true

[taxonomies]
  tag = "tags"

[params]
  description = "Short site description"
  author = "Your Name"

  [params.social]
    github = "your-github"

  [params.theme]
    contentWidth = "650px"

    [params.theme.font]
      body = "'Source Sans 3', system-ui, sans-serif"
      heading = "'Crimson Pro', system-ui, sans-serif"
      code = "'Source Code Pro', ui-monospace, monospace"

    [params.theme.color]
      light = "#faf8f6"
      lightgray = "#ddd6cc"
      gray = "#7a736c"
      darkgray = "#3a3632"
      dark = "#221f1c"
      highlight = "#c8b49b59"
      textHighlight = "#e6be5066"

    [params.theme.colorDark]
      light = "#1a1a1e"
      lightgray = "#2e2e34"
      gray = "#7a7a80"
      darkgray = "#d4d0cc"
      dark = "#ece8e2"
      highlight = "#b4aa961f"
      textHighlight = "#c8aa5066"

[markup.goldmark.parser]
  wrapStandAloneImageWithinParagraph = false
  [markup.goldmark.parser.attribute]
    block = true

[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [["\\[", "\\]"], ["$$", "$$"]]
    inline = [["\\(", "\\)"], ["$", "$"]]
```

Notes:

- `enableRobotsTXT` enables the robots.txt layout shipped with the theme.
- `[outputs]` must include `JSON` for the home page, or the search index is not generated.
- `[outputs]` must include `WEBMANIFEST` (with `[outputFormats.WEBMANIFEST]` as shown) for the PWA manifest, plus `static/icon-192.png` and `static/icon-512.png`.
- `[taxonomies] tag = "tags"` is assumed by the tag links.
- The `[params.theme]` block is optional. Unset values fall back to the defaults in `main.css`.
- The `[markup.goldmark.parser]` block enables the image render hook's auto-sizing (width/height from the file, preventing layout shift) and size overrides via `{width=...}`; both are required for those features.

## Required static files

Put these in `static/`:

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
- `og-image.png` (1200x630), used by Open Graph and Twitter cards
- `katex/katex.min.css` and `katex/fonts/`, the KaTeX stylesheet and its web fonts, needed only if you use math. The theme ships no KaTeX assets; download them from a KaTeX release and copy them under `static/katex/` (keep the `fonts/` subdirectory).

A missing file only causes a 404 on that link; the build is unaffected.

## Fonts

The theme ships no font files; without them it renders with system fonts. To use the typefaces the palette was designed around (Source Sans 3, Crimson Pro, Source Code Pro), self-host them: an `@font-face` stylesheet at `assets/css/fonts.css`, with the font files under `static/fonts/`. The theme links `css/fonts.css` when present.

## Content

- Mermaid: a `mermaid` code fence renders as a diagram with copy and full-screen buttons.
- KaTeX: math is rendered server-side; a page containing `$...$` (inline), `$$...$$` or `\[...\]` (display), or `\(...\)` (inline) automatically gets the stylesheet. No JavaScript is needed. Set `katex: true` in front matter only when you need the stylesheet on a page whose math the render hook does not detect (e.g. math generated by a shortcode). Renderer tolerance is set to `ignore`, so unusual Unicode in formulas will not fail the build.
- Images: `![alt](src "caption")` renders as a `<figure>` with auto `width`/`height` from the file (no layout shift), `loading="lazy"` and `decoding="async"`, and the title as a `<figcaption>`. To override a size, put the attribute on the line below the image: `{width=300}`. A bare image (no caption) renders as a plain `<img>`.
- Tags: pages with a `tags` front-matter list link to `/tags/<tag>/`.
- Callouts: start a blockquote with `> [!type]`, optionally with a title (`> [!warning] Careful`). Supported types are `note`, `info`, `tip`, `important`, `warning`, `alert`, and `error`; any other type renders as a neutral callout. The marker line keeps the rest of the blockquote's markup.
- Card grid: a section or page with `layout: "card-grid"` in front matter renders its child pages as itch.io-style cards (cover image from the `image` param, or a monogram letter; then title, date, and a 2-line clamped description). Drafts get a corner badge; they never render in production builds.

## Keyboard shortcuts

- `Ctrl+K` / `Cmd+K`: open search
- `Ctrl+Shift+L` / `Cmd+Shift+L`: toggle light/dark

## License

MIT. See `LICENSE`.
