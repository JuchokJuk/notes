<script lang="ts">
	import { albums } from '$lib/feature/Albums';
	import AlbumCard from '$lib/shared/AlbumCard.svelte';

	import { page } from '$app/stores';
	const id = Number($page.params.slug);

	const filteredAlbums = albums.filter((album) => album.id !== id);
</script>

<div class="cards-grid">
	{#each filteredAlbums as album}
		<AlbumCard {album} />
	{/each}
</div>

<style lang="scss">
	@import '@/styles/variables.scss';

	.cards-grid {
		@include indent(margin-top, pink);
		@include indent(margin-bottom, pink);
		display: grid;
		// justify-content: center;
		@include column-gap(gap, 0);

		@include xxl() {
			grid-template-columns: repeat(4, min-content);
		}
		@include xl() {
			grid-template-columns: repeat(4, min-content);
		}
		@include l() {
			grid-template-columns: repeat(3, min-content);
		}
		@include m() {
			grid-template-columns: repeat(2, min-content);
		}
		@include s() {
			grid-template-columns: repeat(1, min-content);
		}
	}
</style>
