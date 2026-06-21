# Changelog

All notable changes to `@arraypress/reveal-astro` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — Unreleased

### Added

- `<Reveal />` — a view-transition-safe IntersectionObserver that adds a
  configurable `visibleClass` to matching elements as they enter the
  viewport. Re-runs on every `astro:page-load`, reveals already-in-view
  elements immediately (no flash), and also runs without `<ClientRouter />`.
  Configurable `selector`, `visibleClass`, `threshold`, `rootMargin`, and
  `once`. Extracted from the page-behaviours script shared across the
  ArrayPress Astro theme family.
- `@arraypress/reveal-astro/reveal.css` — optional default animations
  (`.fade-in*`, `.slide-in-*`, `.zoom-*`, `.blur-in`) with a
  `prefers-reduced-motion` opt-out.
