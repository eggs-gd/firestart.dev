<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/Seo.svelte';
	import { HOME_DESCRIPTION, HOME_TITLE, jsonLdHome } from '$lib/seo';
	import type { Sections } from '$lib/content/loadSections';

	let { data } = $props();
</script>

<Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={jsonLdHome} />

{#each data.sectionOrder as id}
	{@const opts = data.sectionOptions[id]}
	<Section
		id={id}
		html={(data.sections as Sections)[id]}
		cardsLayout={opts?.cards === 'row' || opts?.cards === 'column' || opts?.cards === 'strip'
			? opts.cards
			: undefined}
		kind={opts?.kind === 'plaque' || opts?.kind === 'plaque-wide' ? opts.kind : undefined} />
{/each}
