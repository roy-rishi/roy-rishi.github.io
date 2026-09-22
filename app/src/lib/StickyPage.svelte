<script lang="ts">
	import { onMount } from 'svelte';
	let { image, text } = $props();

	let uid = $props.id();
	let elemId = "sticky-" + uid;

	function updateOpacity() {
		let elem = document.getElementById(elemId);
		if (elem == null) return;

		const rect = elem.getBoundingClientRect();
		const posFromTop = rect.top + rect.height / 2;

		const windowHeight = window.innerHeight;
		const windowMid = windowHeight / 2;

		const distFromWindowMid = Math.abs(windowMid - posFromTop);

		const fullyVisibleRange = windowHeight / 8;
		const fadeRange = (windowMid - fullyVisibleRange) / 2;

		let targetOpacity: number;
		if (distFromWindowMid <= fullyVisibleRange) {
			targetOpacity = 1;
		} else {
			targetOpacity = 1 - (distFromWindowMid - fullyVisibleRange) / fadeRange;
			targetOpacity = Math.max(0, Math.min(1, targetOpacity));
		}

		elem.style.setProperty('opacity', targetOpacity.toString());
	}

	onMount(() => {
		updateOpacity();

		window.addEventListener('scroll', updateOpacity, { passive: true });
		window.addEventListener('resize', updateOpacity);
	});
</script>

<div class="relative h-screen">
	<div id={elemId} class="sticky top-1/3 mt-20 mb-20 h-1/3 w-1/2 bg-amber-200">
		{@render image()}
	</div>
	<div class="absolute top-1/2 right-0 w-1/2 -translate-y-1/2 p-20">
		{@render text()}
	</div>
</div>
