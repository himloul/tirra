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
- KaTeX math, loaded only on pages that set `katex: true`
- Print stylesheet
- Colors, fonts, and content width set from the site config

## Install

Copy `themes/tirra` into your site's `themes/` directory (or add it as a submodule), then in `hugo.toml`:

```toml
theme = "tirra"
```

## Configuration

```toml
baseURL = "https://example.org/"
title = "Your Name"
theme = "tirra"
enableRobotsTXT = true

[outputs]
  home = ["HTML", "RSS", "JSON"]

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
```

Notes:

- `enableRobotsTXT` enables the robots.txt layout shipped with the theme.
- `[outputs]` must include `JSON` for the home page, or the search index is not generated.
- `[taxonomies] tag = "tags"` is assumed by the tag links.
- The `[params.theme]` block is optional. Unset values fall back to the defaults in `main.css`.

## Required static files

Put these in `static/`:

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
- `og-image.png` (1200x630), used by Open Graph and Twitter cards

A missing file only causes a 404 on that link; the build is unaffected.

## Fonts

The theme ships no font files; without them it renders with system fonts. To use the typefaces the palette was designed around (Source Sans 3, Crimson Pro, Source Code Pro), self-host them: an `@font-face` stylesheet at `assets/css/fonts.css`, with the font files under `static/fonts/`. The theme links `css/fonts.css` when present.

## Content

- Mermaid: a `mermaid` code fence renders as a diagram with copy and full-screen buttons.
- KaTeX: set `katex: true` in front matter; use `$$...$$` for display math and `\(...\)` for inline.
- Tags: pages with a `tags` front-matter list link to `/tags/<tag>/`.
- Callouts: start a blockquote with `> [!type]`, optionally with a title (`> [!warning] Careful`). Supported types are `note`, `info`, `tip`, `important`, `warning`, `alert`, and `error`; any other type renders as a neutral callout. The marker line keeps the rest of the blockquote's markup.

## Keyboard shortcuts

- `Ctrl+K` / `Cmd+K`: open search
- `Ctrl+Shift+L` / `Cmd+Shift+L`: toggle light/dark

## License

MIT. See `LICENSE`.
