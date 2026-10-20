<script lang="ts">
	import { onMount } from 'svelte';
	import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
	import Icon from './Icon.svelte';
	import FoldedAside from './FoldedAside.svelte';
	import type { CardSection, ContactSection, BlockSection, AsideBlock } from '$lib/content/loadSections';
	import { getContactIconPath } from '$lib/content/contactIcons';

	interface Props {
		id: string;
		/** Pre-rendered HTML, or block with cards, contact, or blocks (prose + asides) */
		html: string | CardSection | ContactSection | BlockSection;
		title?: string;
		/** Card layout: row (grid), column (stack), or strip (scrolling row). */
		cardsLayout?: 'row' | 'column' | 'strip';
		/** Content kind. plaque = narrow tinted block. */
		kind?: 'plaque';
	}
	let { id, html, title = '', cardsLayout, kind }: Props = $props();

	const isCardSection = (v: unknown): v is CardSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as CardSection).cards);

	const isContactSection = (v: unknown): v is ContactSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as ContactSection).contactLinks);

	const isBlockSection = (v: unknown): v is BlockSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as BlockSection).blocks);

	function isAsideBlock(b: { type: string }): b is AsideBlock {
		return b.type === 'aside';
	}

	let rowViewport = $state<HTMLDivElement | null>(null);
	let rowReady = $state(false);

	const rowCards = $derived(cardsLayout === 'strip' && isCardSection(html) ? html.cards : []);
	const rowLoops = $derived(rowCards.length > 1);

	function scrollLeftFor(index: number): number | null {
		if (!rowViewport) return null;
		const card = rowViewport.querySelectorAll<HTMLElement>('.card')[index];
		if (!card) return null;
		const cardRect = card.getBoundingClientRect();
		const viewRect = rowViewport.getBoundingClientRect();
		return (
			rowViewport.scrollLeft +
			(cardRect.left + cardRect.width / 2) -
			(viewRect.left + viewRect.width / 2)
		);
	}

	function nearestCardIndex(): number {
		if (!rowViewport) return 0;
		const viewRect = rowViewport.getBoundingClientRect();
		const mid = viewRect.left + viewRect.width / 2;
		let best = 0;
		let bestDist = Infinity;
		rowViewport.querySelectorAll<HTMLElement>('.card').forEach((card, index) => {
			const rect = card.getBoundingClientRect();
			const dist = Math.abs(rect.left + rect.width / 2 - mid);
			if (dist < bestDist) {
				bestDist = dist;
				best = index;
			}
		});
		return best;
	}

	function scrollToCard(index: number, behavior: ScrollBehavior) {
		const left = scrollLeftFor(index);
		if (left == null || !rowViewport) return;
		rowViewport.scrollTo({ left, behavior });
	}

	function normalizeRow() {
		if (!rowViewport || !rowLoops) return;
		const count = rowCards.length;
		const index = nearestCardIndex();
		if (index >= count && index < count * 2) return;
		const logical = ((index % count) + count) % count;
		scrollToCard(count + logical, 'auto');
	}

	function hasScrollEnd(): boolean {
		return 'onscrollend' in window;
	}

	function stepRow(direction: -1 | 1) {
		if (!rowLoops) return;
		const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
		scrollToCard(nearestCardIndex() + direction, behavior);
	}

	onMount(() => {
		if (!rowLoops || !rowViewport) return;
		const count = rowCards.length;
		const viewport = rowViewport;

		const place = () => scrollToCard(count, 'auto');
		place();
		rowReady = true;

		const onEnd = () => normalizeRow();
		viewport.addEventListener('scrollend', onEnd);

		const supportsScrollEnd = hasScrollEnd();
		let timer = 0;
		const onScroll = () => {
			if (supportsScrollEnd) return;
			clearTimeout(timer);
			timer = setTimeout(normalizeRow, 140);
		};
		viewport.addEventListener('scroll', onScroll, { passive: true });

		const onResize = () => {
			const logical = ((nearestCardIndex() % count) + count) % count;
			scrollToCard(count + logical, 'auto');
		};
		window.addEventListener('resize', onResize);

		return () => {
			viewport.removeEventListener('scrollend', onEnd);
			viewport.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			window.clearTimeout(timer);
		};
	});
</script>

<section
	id={id}
	class="section section--{id}"
	class:section--plaque={kind === 'plaque'}
	aria-labelledby={title ? `${id}-heading` : undefined}
>
	{#if title}
		<h2 id="{id}-heading" class="section__title">{title}</h2>
	{/if}
	{#if isContactSection(html)}
		<div class="block block--contact">
			{#if html.intro}
				<div class="block__intro prose">
					{@html html.intro}
				</div>
			{/if}
			<nav class="contact-links" aria-label="Contact">
				{#each html.contactLinks as link}
					{@const iconPath = getContactIconPath(link.icon ?? link.label)}
					<a
						class="contact-links__item"
						href={link.href}
						rel="noopener noreferrer"
						target="_blank"
						data-cta={link.label}
						data-cta-placement="contact"
					>
						{#if iconPath}
							<Icon path={iconPath} size={1.25} class="contact-links__icon" />
						{/if}
						<span class="contact-links__label">{link.label}</span>
					</a>
				{/each}
			</nav>
		</div>
	{:else if isBlockSection(html)}
		<div class="section__body">
			{#each html.blocks as block}
				{#if block.type === 'html'}
					<div class="prose">{@html block.content}</div>
				{:else if isAsideBlock(block)}
					<FoldedAside id={block.id} trigger={block.trigger} body={block.body} />
				{/if}
			{/each}
		</div>
	{:else if isCardSection(html)}
		<div class="block">
			{#if html.intro}
				<div class="block__intro prose">
					{@html html.intro}
				</div>
			{/if}
			{#if rowLoops}
				<div class="card-row" aria-roledescription="carousel">
					<div class="card-row__nav">
						<button class="card-row__arrow" type="button" aria-label="Previous" onclick={() => stepRow(-1)}>
							<Icon path={mdiChevronLeft} size={1.5} />
						</button>
						<button class="card-row__arrow" type="button" aria-label="Next" onclick={() => stepRow(1)}>
							<Icon path={mdiChevronRight} size={1.5} />
						</button>
					</div>
					<div class="card-row__stage">
						<div class="card-row__viewport" class:is-ready={rowReady} bind:this={rowViewport}>
							<div class="card-row__track">
								{#each [0, 1, 2] as copy (copy)}
									{#each html.cards as card, index (`${copy}-${index}`)}
										<article class="card" aria-hidden={copy === 1 ? undefined : true}>
											<h3 class="card__title">{card.title}</h3>
											<div class="card__body prose">
												{@html card.html}
											</div>
										</article>
									{/each}
								{/each}
							</div>
						</div>
						<div class="card-row__fade card-row__fade--left" aria-hidden="true"></div>
						<div class="card-row__fade card-row__fade--right" aria-hidden="true"></div>
					</div>
				</div>
			{:else}
				<div class="block__cards block__cards--{cardsLayout === 'column' ? 'column' : 'row'}">
					{#each html.cards as card}
						<article class="card">
							<h3 class="card__title">{card.title}</h3>
							<div class="card__body prose">
								{@html card.html}
							</div>
						</article>
					{/each}
				</div>
			{/if}
			{#if html.footer}
				<footer class="block__footer prose">
					{@html html.footer}
				</footer>
			{/if}
		</div>
	{:else}
		<div class="section__body prose">
			{@html html}
		</div>
	{/if}
</section>
