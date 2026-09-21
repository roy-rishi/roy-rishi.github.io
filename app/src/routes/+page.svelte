<!-- Home page -->

<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	// images
	import trophyThumb from '$lib/assets/trophy/lights-on.jpg';
	import lightboxThumb from '$lib/assets/lightbox/DSC_0296.jpg';
	import canTesterThumb from '$lib/assets/can-tester/ui.png';

	let scrollToContent = () => {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<svelte:head><title>About - Rishi Roy</title></svelte:head>

<!-- title fills viewport height-->
<div class="h-screen">
	<!-- centered at 1/3 from top -->
	<div class="absolute text-center w-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<h1 class="text-[110px] font-semibold">Hi, I'm Rishi</h1>
	</div>

	<!-- just above bottom  -->
	<div class="absolute bottom-12 left-1/2 -translate-x-1/2">
		<button class="text-lg hover:underline" onclick={() => scrollToContent()}>About me ↓</button>
	</div>
</div>

<div id="content" class="mx-8 md:mx-[16vw]">
	<h2>Portfolio</h2>

	<ProjectCard
		title="PCB Trophy"
		path="/project/pcb-trophy"
		thumbnail={trophyThumb}
		description="A trophy-shaped PCB with battery-powered lighting. Decorated with vector-defined copper regions, solder mask exclusions, and silkscreen."
	/>
	<ProjectCard
		title="Lithopane Lightbox"
		path="/project/lightbox"
		thumbnail={lightboxThumb}
		description="A Bluetooth-controlled LED lightbox that displays an image by illuminating a 3D lithopane"
	/>
	<ProjectCard
		title="CAN Tester"
		path="/project/can-tester"
		thumbnail={canTesterThumb}
		description=""
	/>
</div>
