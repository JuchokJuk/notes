<script lang="ts">
	import Album from '$lib/feature/routes/album/Album.svelte';
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import Recommendations from '$lib/feature/routes/album/Recommendations.svelte';

	export let data: { pathname: string };

	$: pathname = data.pathname;
</script>

<WidthControl>
	{#key pathname}
		<Album />
		<Recommendations />
	{/key}
</WidthControl>
