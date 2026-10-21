<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer class="site-footer">
	<span>© {new Date().getFullYear()} Oleksandr B.</span>
	<a href="https://eggs.gd">eggs.gd</a>
</footer>
