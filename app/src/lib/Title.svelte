<script>
	let { title, description, image } = $props();
</script>

<!-- full screen title -->
<div class="h-screen">
	<!-- cover image -->
	<img class="m-auto mt-30 mb-20 h-1/2 rounded-xl object-cover" src={image} alt={image.caption} />
	<!-- title left-aligned at bottom left -->
	<div class="ml-8 md:ml-30">
		<h4 class="pb-2 text-7xl font-bold">{title}</h4>
		<h4 class="text-2xl">{description}</h4>
	</div>
</div>
