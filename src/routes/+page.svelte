<script lang="ts">
	export let data: AlbumsData;

	import About from '$lib/feature/routes/main/About/About.svelte';
	import Catalog from '$lib/feature/routes/main/Catalog.svelte';
	import Contacts from '$lib/feature/routes/main/Contacts.svelte';
	import HeroHeader from '$lib/feature/routes/main/heroHeader/HeroHeader.svelte';
	import type { AlbumsData } from './+page';


	const title = "Произведения для гитары"
	const description =
		'Меня зовут Гуркин Владимир Викторович. Представляю на этом сайте свои гитарные произведения, написанные в жанре инструментальной миниатюры.';
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
	<meta property="twitter:url" content="https://gur-kin.ru" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content="" /> -->
</svelte:head>

<HeroHeader />
<Catalog albums={data.albums} />
<About />
<Contacts />
