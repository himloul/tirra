# tirra

A minimal, reading-first Hugo theme. Single narrow text column, serif display type, warm palette with dark mode, and a small set of high-value features. No frameworks.

## Features

- Dark mode with `prefers-color-scheme` default and a manual toggle
- Full-text search (Ctrl+K / Cmd+K) via a prebuilt JSON index + Fuse.js
- Collapsible table of contents on long pages
- Reading time, optional last-modified date
- Reading progress bar, back-to-top button
- Image lightbox, click-to-copy code blocks
- Mermaid diagrams (full-screen view) and KaTeX math, loaded only when used
- Clean print stylesheet
- Config-driven colors, fonts, and content width

## Install

Copy `themes/tirra` into your site's `themes/` directory, or add it as a git submodule, then set:

```toml
theme = "tirra"
```

## Configuration

Minimal `hugo.toml`:

```toml
baseURL = "https://example.org/"
title = "Your Name"
theme = "tirra"
enableRobotsTXT = true

[outputs]
  home = ["HTML", "RSS", "JSON"]   # JSON feeds the search index

[taxonomies]
  tag = "tags"                     # tag links assume this taxonomy

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

All palette, font, and width values are optional; the theme falls back to built-in defaults.

## Required static files

Provide these in your site's `static/` directory:

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
- `og-image.png` (1200x630) for Open Graph / Twitter cards

Missing files degrade silently (404 on the icon link); builds are unaffected.

## Fonts

The theme ships no font files. Without them it renders with system fonts, which is fine. To match the intended look, self-host the three typefaces (Source Sans 3, Crimson Pro, Source Code Pro) and put an `@font-face` stylesheet at `assets/css/fonts.css` in your site, with the font files referenced from `static/fonts/`. The theme loads `css/fonts.css` automatically when present.

## Content

- Mermaid: use a `mermaid` code fence — renders on the page with copy and full-screen buttons.
- KaTeX: add `katex: true` to a page's front matter; write math with `$$...$$` (display) or `\(...\)` (inline).
- Tags: a page with `tags` front matter links to `/tags/<tag>/`.

## Shortcuts

- Ctrl/Cmd+K — open search
- Ctrl/Cmd+Shift+L — toggle light/dark

## License

MIT — see `LICENSE`.
