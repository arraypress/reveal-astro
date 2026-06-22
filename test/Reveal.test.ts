import { describe, it, expect, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import RevealRaw from '../src/Reveal.astro';
import type { RevealProps } from '../src/types';

const Reveal = RevealRaw as Parameters<AstroContainer['renderToString']>[0];

let container: AstroContainer;

beforeAll(async () => {
	container = await AstroContainer.create();
});

async function render(props: RevealProps = {}): Promise<string> {
	return container.renderToString(Reveal, {
		props: props as unknown as Record<string, unknown>,
	});
}

describe('<Reveal>', () => {
	it('renders an inline script wiring the observer', async () => {
		const html = await render();
		expect(html).toContain('<script');
		expect(html).toContain('IntersectionObserver');
		expect(html).toContain('astro:page-load');
	});

	it('uses sensible defaults', async () => {
		const html = await render();
		expect(html).toContain('is-visible');
		expect(html).toContain('fade-in');
		expect(html).toContain('0.08');
	});

	it('honours a custom selector and visible class', async () => {
		const html = await render({ selector: '[data-reveal]', visibleClass: 'shown' });
		expect(html).toContain('[data-reveal]');
		expect(html).toContain('shown');
	});

	it('default selector includes the flip family', async () => {
		const html = await render();
		expect(html).toContain('flip-up');
		expect(html).toContain('flip-right');
	});

	it('honours custom threshold, rootMargin and once', async () => {
		const html = await render({ threshold: 0.5, rootMargin: '0px', once: false });
		expect(html).toContain('0.5');
		expect(html).toContain('"0px"');
		expect(html).toContain('false');
	});
});
