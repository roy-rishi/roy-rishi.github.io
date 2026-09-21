<script>
	let { images } = $props();
</script>

<div class="flex flex-col gap-8 md:flex-row">
	{#each images as img}
		<div class="w-full md:m-auto md:w-[{img.width}]">
			<img class="w-full rounded-md" src={img.src} alt={img.caption} />
			{#if img.caption}
				<p class="m-3 text-center font-medium">{img.caption}</p>
			{/if}
		</div>
	{/each}
</div>
