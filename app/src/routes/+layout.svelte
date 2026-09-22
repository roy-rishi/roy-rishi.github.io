<!-- Layout with a nav bar and footer -->

<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav></Nav>

<div class="grow">
	{@render children()}
</div>

<Footer></Footer>

<style>
	@import "tailwindcss";

	/* default styles */
	:global {
		body {
			background-color: #e0eefe;
			color: #263a50;
		}

		h1 {
			@apply text-9xl font-bold;
		}

		h2 {
			@apply text-6xl font-semibold;
		}

		h3 {
			@apply text-4xl font-semibold;
		}

		a {
			@apply hover:underline;
		}
	}
</style>
