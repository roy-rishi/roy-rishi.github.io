<script>
	let { image, caption } = $props();
</script>

<img class="w-full rounded-lg object-contain" src={image} alt={caption} />
<p class="m-3 text-center font-medium">{caption}</p>
