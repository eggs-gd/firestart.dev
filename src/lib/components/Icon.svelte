<script lang="ts">
	/** SVG path from @mdi/js (e.g. mdiEmail). ViewBox 0 0 24 24. */
	interface Props {
		path: string;
		size?: number;
		class?: string;
	}
	let { path, size = 1.25, class: className = '' }: Props = $props();
	const sizePx = $derived(`${size * 16}px`);
</script>

<svg
	class="icon {className}"
	viewBox="0 0 24 24"
	width={sizePx}
	height={sizePx}
	aria-hidden="true"
>
	<path fill="currentColor" d={path} />
</svg>
