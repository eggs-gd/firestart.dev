<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import type { Sections } from '$lib/content/loadSections';

	let { data } = $props();
</script>

{#each data.sectionOrder as id}
	{@const opts = data.sectionOptions[id]}
	<Section
		id={id}
		html={(data.sections as Sections)[id]}
		cardsLayout={opts?.cards === 'row' || opts?.cards === 'column' ? opts.cards : undefined} />
{/each}
