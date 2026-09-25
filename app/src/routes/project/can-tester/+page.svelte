<!-- CAN Tester -->

<script lang="ts">
	import Title from '$lib/Title.svelte';
	import LinkButton from '$lib/LinkButton.svelte';

	// images
	import titleImg from '$lib/assets/can-tester/ui.png';
</script>

<svelte:head><title>CAN Tester - Rishi Roy</title></svelte:head>

<Title title="CAN Tester" image={titleImg} description="CAN tester" />

<div class="mx-8 flex flex-col gap-4 md:mx-40">
	<h3>Links</h3>
	<div class="flex flex-wrap gap-4">
		<LinkButton url="https://github.com/huskyroboticsteam/can-tester" name="GitHub Repo" />
	</div>
</div>
