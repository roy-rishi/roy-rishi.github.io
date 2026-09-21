<script>
	let { images } = $props();
</script>

<div class="mx-8 my-40 md:mx-18">
	<div class="flex flex-col gap-8 md:flex-row">
		{#each images as img}
			<div class="w-full md:m-auto" style={img.width ? `width: ${img.width};` : ''}>
				<img class="w-full rounded-md" src={img.src} alt={img.caption} />
				{#if img.caption}
					<p class="m-3 text-center">{img.caption}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
