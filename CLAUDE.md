# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Jin Lei's personal academic website (jinlei.fewbody.com), built with Jekyll using the Academic Pages theme (forked from Minimal Mistakes). It is deployed via GitHub Pages.

## Development Commands

```bash
# Install dependencies
bundle install

# Serve locally (auto-rebuilds on changes)
bundle exec jekyll liveserve

# Serve with dev overrides (localhost:4000, no analytics, expanded CSS)
bundle exec jekyll liveserve --config _config.yml,_config.dev.yml

# Rebuild JS (uglify vendor + plugin scripts)
npm run build:js
```

## Architecture

**Jekyll collections** define the site's content sections, each mapped to a directory and a page:

| Collection | Directory | Page | Notes |
|---|---|---|---|
| Publications | `_publications/` | `_pages/publications.md` | Contains PDF files directly, not markdown |
| Teaching | `_teaching/` | `_pages/teaching.html` | Mix of markdown and PDF lecture files |
| Service | `_service/` | `_pages/service.html` | |
| Talks | (not in use) | `_pages/talks.md` | |
| Posts | `_posts/` | (blog, currently disabled in nav) | |

**Navigation** is controlled by `_data/navigation.yml`. The main nav links: Publications, Talks, Teaching, Service, Graduate Guidance, CV.

**Layouts** (`_layouts/`): `default.html` → `single.html` (most pages), `talk.html` (talks), `archive.html` (list pages), `splash.html` (feature pages).

**Key include files** (`_includes/`): `head.html` (meta/CSS), `masthead.html` (nav bar), `author-profile.html` (sidebar bio), `footer.html`, `scripts.html` (JS loading).

**Styling**: SCSS files in `_sass/`, compiled via `assets/css/main.scss`. The `_variables.scss` file controls theme colors and fonts.

**Site config**: `_config.yml` holds all site-wide settings (author info, social links, collections, plugin list). Changes to this file require restarting the Jekyll server.

## Content Conventions

- The homepage is `_pages/about.md` (permalink: `/`).
- Static files (PDFs, images) go in `files/` and `images/` respectively.
- Author info (name, avatar, bio, social links) is set in `_config.yml` under the `author:` key.
- Publication PDFs are stored directly in `_publications/` rather than as markdown posts.
