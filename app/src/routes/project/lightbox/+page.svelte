<!-- Lithophane Lightbox -->

<script lang="ts">
	import ImageCols from '$lib/ImageCols.svelte';
	import LargeImage from '$lib/LargeImage.svelte';
	import ScrollyAnimation from '$lib/ScrollyAnimation.svelte';
	import Title from '$lib/Title.svelte';

	// images
	import titleImg from '$lib/assets/lightbox/DSC_0296.jpg';
	import controllerFront from '$lib/assets/lightbox/DSC_0296.jpg';
	import controllerBack from '$lib/assets/lightbox/DSC_0298.jpg';
	import ledGrid from '$lib/assets/lightbox/led-grid.jpg';
	const imageData = [
		{
			src: controllerFront,
			caption: 'The front of the controller PCB',
			width: '50vw'
		},
		{
			src: controllerBack,
			caption: 'The back of the controller PCB',
			width: '50vw'
		}
	];
	import nrfConnect from '$lib/assets/lightbox/nrf-connect.png';

	// exploded view animation frames
	const frames = new Array(236);
	const modules = import.meta.glob('$lib/assets/lightbox/exploded-view/*.webp', {
		eager: true,
		import: 'default'
	});
	for (const [path, url] of Object.entries(modules)) {
		const frameNum = parseInt(path.slice(-9, -5));
		frames[frameNum - 1] = url;
	}
</script>

<svelte:head><title>Lithophane Lightbox - Rishi Roy</title></svelte:head>

<Title
	title="Lithophane Lightbox"
	description="A Bluetooth-controlled lightbox that displays an image by illuminating a 3D lithophane"
	image={titleImg}
/>

<div class="mx-8 flex flex-col gap-4 md:mx-40">
	<!-- scrolly exploded view -->
	<ScrollyAnimation {frames} scrollDist="250vh" />

	<h3>Controller PCB</h3>
	<p>
		I designed this PCB around an ESP32-S3 SoC. Its firmware is built with the Espressif IoT
		Development Framework (ESP-IDF) and the NimBLE Bluetooth Low-Energy (BLE) stack. It responds to
		to on/off events and configuration updates sent from a mobile phone. It implements the GAP
		protocol to advertise itself pair to a phone. Then, it listens for GATT events and drives the
		LEDs (on another board) accordingly.
	</p>
	<p>
		I used an RTOS to run the BLE stack and LED drivers concurrently. Message queues pass commands
		and data between tasks.
	</p>
	<p>
		The ESP32-S3 features a native USB peripheral, so I exposed two GPIOs to a 3-pin header (GND,
		D+, and D-) labeled PGRM1. I use this header to program and debug the board, and I power the
		board through its USB-C connector. When mounted in its case, only the USB-C connector, along
		with a button, are exposed.
	</p>
	<p>
		A logic level shifter on the LED output ensures that the signal reliably reaches the first LED
		on the LED grid. The USB differential data traces are routed close together to maximize their
		noise immunity.
	</p>
	<div class="my-20">
		<ImageCols images={imageData} />
	</div>

	<h3>LED Grid</h3>
	<p>
		This board has 54 individually-addressable LEDs of the WS2812B chipset. It is receives power and
		data input from the controller PCB (above), and adds a bulk capacitor. This stabilizes the
		voltage across flashing LED patterns, and prevents the ICs inside of each LED from browning out
		and corrupting the daisy-chained data signal.
	</p>
	<div class="mx-12 my-20">
		<LargeImage image={ledGrid} caption="A 9x6 grid of individually-addressable LEDs" />
	</div>
	<p>
		Rather than route power traces, the front surface has a 5V plane which the LEDs connect to. This
		"star"-like configuration minimizes voltage drop and ensures each LED has a similar voltage to
		reference the data signal to, ensuring reliable data transfer. These LEDs have internal
		capacitors, so no external decoupling capacitors are needed.
	</p>
	<p>
		The back layer has a ground plane. The data signals are chained between LEDs on the front
		surface so that their return paths have an uninterrupted ground plane to flow through.
	</p>

	<h3>Bluetooth</h3>
	<p>
		The lightbox can be turned on and off from a mobile phone. It features the Automation IO BLE
		characteristic, so a paired phone can write to this value to change the state. In the future, it
		could support color changing functionality and even animations to take full advantage of the
		individually-addressable RGB LEDs. I haven't gotten around to building a mobile app, so for now
		I use the nRF Connect BLE testing app from Nordic Semiconductor to control the lightbox.
	</p>
	<div class="w-1/2 sm:w-2/5 md:w-1/2 mx-auto">
		<LargeImage
			image={nrfConnect}
			caption="The nRF Connect application can connect, bond, and write to the lightbox"
		/>
	</div>
</div>

<div class="mx-8 md:mx-40"></div>
