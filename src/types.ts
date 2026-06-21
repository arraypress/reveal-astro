/**
 * @module @arraypress/reveal-astro/types
 */

/** Props for `<Reveal />`. */
export interface RevealProps {
	/**
	 * Comma-separated CSS selector list of elements to reveal. Default:
	 * the built-in `.fade-in*` / `.slide-in-*` / `.zoom-*` / `.blur-in`
	 * family. Pass your own (e.g. `'[data-reveal]'`) to use a different
	 * convention.
	 */
	selector?: string;
	/**
	 * Class added when an element enters the viewport (the resting
	 * state your CSS transitions to). Default: `'is-visible'`.
	 */
	visibleClass?: string;
	/** IntersectionObserver threshold. Default: `0.08`. */
	threshold?: number;
	/** IntersectionObserver rootMargin. Default: `'0px 0px -10% 0px'`. */
	rootMargin?: string;
	/**
	 * Reveal once and stop observing (default), or re-hide when the
	 * element leaves the viewport so it animates again on re-entry.
	 * Default: `true`.
	 */
	once?: boolean;
}
