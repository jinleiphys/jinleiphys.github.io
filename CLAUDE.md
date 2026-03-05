# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Jin Lei's academic website (jinleiphys.github.io / jinlei.fewbody.com), built with Jekyll using the Academic Pages theme (forked from Minimal Mistakes). Deployed via GitHub Pages.

## Development Commands

```bash
bundle install                # install Ruby dependencies
bundle exec jekyll liveserve  # serve locally with auto-rebuild

# Dev mode: localhost:4000, no analytics, expanded CSS
bundle exec jekyll liveserve --config _config.yml,_config.dev.yml

npm run build:js              # uglify vendor + plugin JS into assets/js/main.min.js
```

Changes to `_config.yml` require restarting the Jekyll server.

## Architecture

**Navigation** (`_data/navigation.yml`): Research, Publications, Group, Talks, Teaching, Service, CV. Graduate Guidance and Blog Posts are commented out.

**Pages** (`_pages/`): Each nav item maps to a standalone page file. Key pages:
- `about.md` — homepage (permalink: `/`)
- `research.md` — research topics with inline HTML for superscripts/subscripts
- `publications.md` — hand-curated list with inline HTML `<a href>` links to PDFs
- `group.md` — group members
- `talks.md` — chronological list of talks, seminars, posters
- `teaching.html`, `service.html` — collection archive pages using Liquid loops
- `cv.md` — links to PDF CV in `files/`

**Collections** (configured in `_config.yml`):

| Collection | Directory | Content type |
|---|---|---|
| publications | `_publications/` | PDF files directly (not markdown posts) |
| teaching | `_teaching/` | Mix of markdown pages and PDF lecture files |
| service | `_service/` | Markdown pages |
| talks | `_talks/` | Not actively used; talks listed in `_pages/talks.md` instead |

**Layout chain**: `default.html` → `single.html` (most pages) or `archive.html` (list pages) or `talk.html` (talks).

**Key includes** (`_includes/`): `head.html` (meta/CSS), `masthead.html` (nav bar), `author-profile.html` (sidebar), `scripts.html` (JS).

**Styling**: SCSS in `_sass/`, compiled via `assets/css/main.scss`. Theme variables in `_variables.scss`.

## Content Conventions

- Publication PDFs go in `_publications/` and are linked from `_pages/publications.md` using `<a href="/publications/filename.pdf">`.
- Static files: PDFs in `files/`, images in `images/`.
- Author info (name, avatar, bio, social links) is in `_config.yml` under `author:`.
- Research page uses raw HTML for chemical notation (e.g., `<sup>6</sup>Li`).
- The publications page is **not** auto-generated from the collection — it's a manually maintained markdown file with three sections: Highlighted Publications, Journal Articles, Conference Proceedings.
