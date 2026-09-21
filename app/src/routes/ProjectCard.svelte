<script lang="ts">
	let { title, path, thumbnail, description } = $props();
</script>

<div class="my-8 md:flex md:flex-row md:gap-4">
    <!-- thumbnail -->
	<img class="aspect-3/2 md:h-52 rounded-xl object-cover" src={thumbnail} alt={description} />
    <!-- info -->
	<div class="flex md:grow flex-col gap-2">
		<h3>{title}</h3>
		<p class="grow">{description}</p>
		<a
			class="rounded-2xl border border-blue-950 px-4 font-medium transition duration-150 ease-in-out hover:translate-x-2 hover:bg-blue-950 hover:text-blue-100"
			href={path}>Read More →</a
		>
	</div>
</div>
