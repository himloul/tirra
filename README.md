# tirra



A Hugo theme for a digital garden. Your whole site is a folder of Markdown files:
notes, folders, and posts publish as pages. Nothing else to build.

*tirra* (ⵜⵉⵔⵔⴰ) means "writing" in Tamazight.

Demo: https://tirra-hugo.pages.dev/ · Requires Hugo ≥ 0.146.0

## Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/himloul/tirra/main/images/sc.png" alt="Home, desktop" width="72%">
  <img src="https://raw.githubusercontent.com/himloul/tirra/main/images/sc-grid.png" alt="Articles, Grid" width="24%">
</p>

## What you get

- **Reading:** narrow column, TOC, reading time, progress bar, back-to-top
- **Writing:** plain Markdown with server-side KaTeX, `mermaid` fences, and `> [!type]` callouts
- **Navigation:** folders under `content/` become pages with breadcrumbs — an Obsidian vault drops in as-is
- **Web basics:** dark mode (system + remembered toggle), full-text search (`Ctrl+K`), offline reading + installable app (service worker + manifest), heading anchors, JSON-LD and Open Graph meta

## Install

```sh
git submodule add https://github.com/himloul/tirra.git themes/tirra
```

```toml
theme = "tirra"

[markup]
  _merge = "deep"
```

`_merge = "deep"` is required for the theme's markup defaults to apply.

## Start

Copy `exampleSite/` - a working demo of everything — edit `baseURL` and `title`, delete the demo posts. Palettes, fonts, width, and search tuning live under `[params.theme]` in `hugo.toml`. Palette and callout colors default to `assets/css/main.css`; set only the keys you want to override.

## License

MIT. See `LICENSE`.
