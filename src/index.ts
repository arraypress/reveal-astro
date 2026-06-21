/**
 * @module @arraypress/reveal-astro
 *
 * A view-transition-safe scroll-reveal observer for Astro. Mount
 * `<Reveal />` once; it adds a "visible" class to matching elements as
 * they enter the viewport. Bring your own animation CSS, or import the
 * optional `@arraypress/reveal-astro/reveal.css`.
 *
 * ```astro
 * ---
 * import { Reveal } from '@arraypress/reveal-astro';
 * import '@arraypress/reveal-astro/reveal.css';
 * ---
 * <section class="fade-in-up">…</section>
 * <Reveal />
 * ```
 */

import Reveal from './Reveal.astro';

export { Reveal };
export type * from './types';
export default Reveal;
