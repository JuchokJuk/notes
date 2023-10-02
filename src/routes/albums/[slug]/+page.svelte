<script lang="ts">
	import Album from '$lib/feature/routes/album/Album.svelte';
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import Recommendations from '$lib/feature/routes/album/Recommendations.svelte';
	import type { Album as AlbumData, ExpandedAlbum } from '$lib/shared/API';

	export let data: {
		slug: string;
		album: ExpandedAlbum;
		recommendations: AlbumData[];
	};

	const title = data.album.name;
	const description = data.album.description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://gur-kin.ru" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content="" /> -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="gur-kin.ru" />
	<meta property="twitter:url" content={`https://gur-kin.ru/${data.slug}`} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content="" /> -->
</svelte:head>

<WidthControl>
	{#key data.slug}
		<Album album={data.album} />
		<Recommendations albums={data.recommendations} />
	{/key}
</WidthControl>
