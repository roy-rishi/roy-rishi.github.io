<script lang="ts">
	let { url, name } = $props();
</script>

<a
	class="rounded-xl border-2 border-[#263a50] px-3 py-1 font-medium hover:bg-[#263a50] hover:text-[#e0eefe]"
	href={url}
	target="_blank">{name} ↗︎</a
>
