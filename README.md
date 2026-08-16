# tirra

A Hugo theme for a digital garden. Your whole site is a folder of Markdown files:
notes, folders, and posts publish as pages. Nothing else to build.

*tirra* (ⵜⵉⵔⵔⴰ) means "writing" in Tamazight, the theme is a narrow column for a digital garden.

Demo: https://tirra-hugo.pages.dev/ · Requires Hugo ≥ 0.146.0

## Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/himloul/tirra/main/images/sc.png" alt="Home, desktop" width="72%">
  <img src="https://raw.githubusercontent.com/himloul/tirra/main/images/sc-grid.png" alt="Articles, Grid" width="24%">
</p>

## Features

- Reading-first: narrow column, TOC, reading time, reading progress bar, back-to-top
- Dark mode that follows the system, toggle saved to `localStorage`
- Full-text search (`Ctrl+K`) across every page
- Offline reading via a service worker and an installable web app manifest
- Breadcrumbs on every page; folders under `content/` become sections — an Obsidian-style vault drops in as-is
- Card-grid section layout, heading anchor links, JSON-LD and Open Graph meta

## Content

Server-side KaTeX, `> [!type]` callouts, `mermaid` fences, copy buttons, image lightbox, auto-sized lazy images, print stylesheet, plain Markdown, full syntax in `exampleSite/content`.

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

## Config

Copy `exampleSite/` - a working demo of every feature — edit `baseURL` and `title`, delete the demo posts. Palettes, fonts, width, and search tuning live under `[params.theme]`; KaTeX and favicon assets are static files the demo ships.

## License

MIT.
