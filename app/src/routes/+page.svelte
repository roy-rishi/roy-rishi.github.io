<!-- Home page -->

<script lang="ts">
	let scrollToContent = () => {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<!-- title fills viewport height-->
<div class="h-screen">
	<!-- centered at 1/3 from top -->
	<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<h1 class="text-[110px] font-semibold">Hi, I'm Rishi</h1>
	</div>

	<!-- just above bottom  -->
	<div class="absolute bottom-12 left-1/2 -translate-x-1/2">
		<button class="text-lg hover:underline" onclick={() => scrollToContent()}>About me ↓</button>
	</div>
</div>

<div id="content" class="mx-50">
    <h2>My Work</h2>
    <p>Some text</p>
</div>
