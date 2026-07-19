<script lang="ts">
	import Icon from './Icon.svelte';
	import FoldedAside from './FoldedAside.svelte';
	import type { CardSection, ContactSection, BlockSection, AsideBlock } from '$lib/content/loadSections';
	import { getContactIconPath } from '$lib/content/contactIcons';

	interface Props {
		id: string;
		/** Pre-rendered HTML, or block with cards, contact, or blocks (prose + asides) */
		html: string | CardSection | ContactSection | BlockSection;
		title?: string;
		/** Card layout when section has cards: row (horizontal) or column (vertical). Default row. */
		cardsLayout?: 'row' | 'column';
	}
	let { id, html, title = '', cardsLayout = 'row' }: Props = $props();

	const isCardSection = (v: unknown): v is CardSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as CardSection).cards);

	const isContactSection = (v: unknown): v is ContactSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as ContactSection).contactLinks);

	const isBlockSection = (v: unknown): v is BlockSection =>
		typeof v === 'object' && v !== null && Array.isArray((v as BlockSection).blocks);

	function isAsideBlock(b: { type: string }): b is AsideBlock {
		return b.type === 'aside';
	}
</script>

<section id={id} class="section section--{id}" aria-labelledby={title ? `${id}-heading` : undefined}>
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
					<a class="contact-links__item" href={link.href} rel="noopener noreferrer" target="_blank">
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
			<div class="block__cards block__cards--{cardsLayout}">
				{#each html.cards as card}
					<article class="card">
						<h3 class="card__title">{card.title}</h3>
						<div class="card__body prose">
							{@html card.html}
						</div>
					</article>
				{/each}
			</div>
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
