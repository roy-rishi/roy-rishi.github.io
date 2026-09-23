<script>
	let { title, description, image } = $props();
</script>

<!-- full screen title -->
<div class="h-screen">
	<!-- cover image -->
	<img class="m-auto mt-30 mb-20 h-1/3 sm:h-2/5 md:h-1/2 rounded-xl object-cover" src={image} alt={image.caption} />
	<!-- title at bottom left -->
	<div class="ml-8 sm:ml-20 md:ml-40">
		<h4 class="pb-2 text-7xl font-bold">{title}</h4>
		<h4 class="text-2xl">{description}</h4>
	</div>
</div>
