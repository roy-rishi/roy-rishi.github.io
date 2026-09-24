<script lang="ts">
	import { onMount } from 'svelte';
    let { frames, scrollDist }: { frames: string[], scrollDist: string } = $props();

	let currentFrame = $state(0);
	let isLoaded = $state(false);

	// preload images asynchronously
	$effect(() => {
		let loadedCount = 0;
		frames.forEach((src) => {
			const img = new Image();
			img.src = src;
			img.onload = () => {
				loadedCount++;
				if (loadedCount === frames.length) isLoaded = true;
			};
		});
	});

	const frameStartIndex = 0;
	const frameEndIndex = frames.length - 1;

	let sticky: HTMLElement | null;
	let bounding: HTMLElement | null;

	function updateFrame() {
		if (sticky == null || bounding == null) return;

		let stickyRect = sticky.getBoundingClientRect();
		let boundingRect = bounding.getBoundingClientRect();

		// zero until the sticky container scrolls into view and starts sticking
		const stickyDistFromBounding = Math.abs(boundingRect.top - stickyRect.top);
		const fullScrollDist = Math.abs(Math.abs(boundingRect.height) - Math.abs(stickyRect.height));

		if (stickyDistFromBounding <= 0) {
			currentFrame = 0;
			return;
		}

		const frameIndex = Math.floor(
			(stickyDistFromBounding / fullScrollDist) * (frameEndIndex - frameStartIndex) +
				frameStartIndex
		);
		currentFrame = frameIndex;
	}

	onMount(() => {
		sticky = document.getElementById('sticky-container');
		bounding = document.getElementById('bounding-container');

		updateFrame();
		window.addEventListener('scroll', updateFrame);
	});    	
</script>

<!-- viewport height + scroll distance -->
<div id="bounding-container" class="relative" style="height: calc(100vh + {scrollDist})">
	<!-- sticky scrolling turntable -->
	<div id="sticky-container" class="sticky top-0 h-screen w-full">
		{#if !isLoaded}
			<p class="text-center">Please wait, loading 3D view...</p>
		{:else}
			<img
				src={frames[currentFrame]}
				class="absolute top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
				alt="Turntable TODO"
			/>
		{/if}
	</div>
</div>
