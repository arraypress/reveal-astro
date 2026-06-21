# @arraypress/reveal-astro

View-transition-safe scroll-reveal for Astro. One `<Reveal />` component mounts a single IntersectionObserver that adds a "visible" class to matching elements as they enter the viewport. Re-runs on every `astro:page-load`, reveals already-in-view elements immediately (no flash), and works with or without `<ClientRouter />`.

## Install

```bash
npm install @arraypress/reveal-astro
```

## Usage

```astro
---
import { Reveal } from '@arraypress/reveal-astro';
import '@arraypress/reveal-astro/reveal.css';   // optional default animations
---
<section class="fade-in-up">Reveals on scroll</section>
<section class="zoom-in">So does this</section>

<Reveal />
```

Add `<Reveal />` once (e.g. near the end of your Layout). Tag elements with the animation classes; they start hidden and transition in when scrolled into view.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `selector` | `string` | `.fade-in*`, `.slide-in-*`, `.zoom-*`, `.blur-in` | Comma-separated selector list. Pass `'[data-reveal]'` for a different convention. |
| `visibleClass` | `string` | `'is-visible'` | Class added on intersect — the resting state your CSS transitions to. |
| `threshold` | `number` | `0.08` | IntersectionObserver threshold. |
| `rootMargin` | `string` | `'0px 0px -10% 0px'` | IntersectionObserver rootMargin. |
| `once` | `boolean` | `true` | Reveal once, or re-hide on exit so it re-animates on re-entry. |

## CSS

The component only toggles the class — the animation lives in CSS. Two options:

- **Use the defaults:** `import '@arraypress/reveal-astro/reveal.css'` ships `.fade-in*` / `.slide-in-*` / `.zoom-*` / `.blur-in` hidden states + an `.is-visible` resting state, with a `prefers-reduced-motion` opt-out.
- **Bring your own:** style the classes (or your custom `selector` + `visibleClass`) however you like. Each tagged element should have a hidden "from" state and a visible "to" state under your `visibleClass`.

## License

MIT
