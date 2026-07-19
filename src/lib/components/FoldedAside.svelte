<script lang="ts">
	/** Trigger = HTML of the line that precedes the aside (the one that "ends with" the chevron). */
	interface Props {
		id: string;
		trigger: string;
		body: string;
	}
	let { id, trigger, body }: Props = $props();
	let expanded = $state(false);
</script>

<div class="aside-line" data-aside-id={id}>
	<div
		class="aside-line__trigger"
		role="button"
		tabindex="0"
		aria-expanded={expanded}
		aria-controls="{id}-aside-body"
		id="{id}-aside-trigger"
		onclick={() => (expanded = !expanded)}
		onkeydown={(e) => e.key === 'Enter' && (expanded = !expanded)}
	>
		<span class="aside-line__text">{@html trigger}</span>
		<span class="aside-line__chevron" aria-hidden="true">{expanded ? '▼' : '▶'}</span>
	</div>
	<div
		id="{id}-aside-body"
		class="aside-line__body prose"
		role="region"
		aria-labelledby="{id}-aside-trigger"
		hidden={!expanded}
	>
		{@html body}
	</div>
</div>
