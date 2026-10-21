<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ConsentBanner from '$lib/analytics/ConsentBanner.svelte';
	import { reopenConsent } from '$lib/analytics/consent';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer class="site-footer">
	<span>© {new Date().getFullYear()} Oleksandr B.</span>
	<a href="https://eggs.gd">eggs.gd</a>
	<a href="/privacy">Privacy</a>
	<button type="button" class="cookie-link" onclick={reopenConsent}>Cookie settings</button>
</footer>

<ConsentBanner privacyHref="/privacy" />
