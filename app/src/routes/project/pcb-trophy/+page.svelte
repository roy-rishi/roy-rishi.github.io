<script lang="ts">
	import Title from '$lib/Title.svelte';
	import ScrollyAnimation from '$lib/ScrollyAnimation.svelte';
	import ImageCols from '$lib/ImageCols.svelte';

	// images
	import titleImg from '$lib/assets/trophy/4-hero.jpg';
	import lightsOn from '$lib/assets/trophy/lights-on.jpg';
	import jumperWires from '$lib/assets/trophy/jumper-wires.jpg';
	const imageData = [
		{
			src: lightsOn,
			alt: 'Lights on',
			caption: 'Pressing a button turns the lights on',
			width: '40vw'
		},
		{
			src: jumperWires,
			alt: 'Jumper wires on breadboard',
			caption: 'Debugging an incorrectly calculated transistor base resistor',
			width: '30vw'
		}
	];

	// turntable frames
	const frames = new Array(300);
	const modules = import.meta.glob('$lib/assets/trophy/turntable/frame*.webp', {
		eager: true,
		import: 'default'
	});
	for (const [path, url] of Object.entries(modules)) {
		const frameNum = parseInt(path.slice(path.lastIndexOf('frame') + 5), 10);
		frames[frameNum - 1] = url;
	}
</script>

<svelte:head><title>PCB Trophy - Rishi Roy</title></svelte:head>

<!-- full-screen title-->
<Title
	title="PCB Trophy"
	description="A trophy-shaped circuit board for finalists of the Northshore Coding Competition"
	image={titleImg}
/>

<!-- scrolly turntable animation -->
<ScrollyAnimation {frames} scrollDist="200vh" />

<div class="mx-8 md:mx-40">
	<!-- 2 side-by-side images with captions -->
	<ImageCols images={imageData} />

	<!-- paragraphs -->
	<div class="flex flex-col gap-12">
		<h3>Electronics Design (ECAD)</h3>
		<p>
			The PCB features a TPS610985 boost converter IC to step up the voltage from a single AAA
			battery. A momentary switch and transistor activate the lights when pressed.
		</p>
		<h3 class="pt-14">Mechanical Design (MCAD)</h3>
		<p>
			I designed a 3D-printed stand that holds a AAA battery and stands up the PCB. It hides the
			wires that connect the PCB to the battery contacts. There is enough wiggle room so that the
			wire is long enough to solder before gluing, but can fold into a small Z-shape when assembled.
		</p>
		<p>
			To reduce costs, the different prize levels were written by gluing a 3D-printed panel onto a
			rectangular region of exposed copper. This produces the desired silver text, but allows all of
			the PCBs to be ordered in one batch of 5.
		</p>
	</div>
</div>
