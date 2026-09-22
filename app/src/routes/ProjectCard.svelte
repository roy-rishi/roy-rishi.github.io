<script lang="ts">
	let { title, path, thumbnail, description } = $props();
</script>

<div class="my-8 md:flex md:flex-row md:gap-4">
	<!-- thumbnail -->
	<img class="aspect-3/2 rounded-xl object-cover md:h-52" src={thumbnail} alt={description} />
	<!-- info -->
	<div class="flex flex-col gap-2 md:grow">
		<h3>{title}</h3>
		<p class="grow">{description}</p>
		<a
			class="rounded-2xl border border-blue-950 px-2 font-medium hover:bg-blue-950 hover:text-blue-100"
			href={path}>Read More →</a
		>
	</div>
</div>
