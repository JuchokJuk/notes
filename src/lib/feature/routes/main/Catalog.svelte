<script lang="ts">
	import Body6 from '$lib/shared/fontSystem/body/body6/Body6.svelte';
	import Headline1 from '$lib/shared/fontSystem/headlines/headline1/Headline1.svelte';
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import Star from '$lib/shared/icons/star.svg?raw';
	import AlbumCard from '$lib/shared/AlbumCard.svelte';
	import { albums } from '$lib/feature/Albums';
</script>

<WidthControl>
	<div class="header-container" id="catalog">
		<div class="star-container">
			{@html Star}
		</div>
		<Headline1>Каталог.</Headline1>
	</div>
	<Body6
		>Все представленные произведения даются без обозначений аппликатуры, динамики, нюансировки и
		решаются самим исполнителем или его педагогом.</Body6
	>
	<div class="cards-grid">
		{#each albums as album}
			<AlbumCard {album}/>
		{/each}
	</div>
</WidthControl>

<style lang="scss">
	@import '@/styles/variables.scss';
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid $white-1;
		border-bottom: 1px solid $white-1;

		@include indent(margin-bottom, pink);

		.star-container {
			display: flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid $white-1;

			@include xxl() {
				@include column(2);
				height: 264px;
			}
			@include xl() {
				@include column(2);
				height: 216px;
			}
			@include l() {
				@include column(2);
				height: 142px;
			}
			@include m() {
				@include column(2);
				height: 104px;
			}
			@include s() {
				width: 90px;
				height: 90px;
			}

			:global(svg) {
				stroke: $white-1;
				@include xxl() {
					width: 136px;
					height: 136px;
				}
				@include xl() {
					width: 119px;
					height: 119px;
				}
				@include l() {
					width: 75px;
					height: 75px;
				}
				@include m() {
					width: 63px;
					height: 63px;
				}
				@include s() {
					width: 42px;
					height: 42px;
				}
			}
		}
	}

	.cards-grid {
		@include indent(margin-top, pink);
		@include indent(margin-bottom, red);
		display: grid;
		justify-content: center;
		@include column-gap(gap, 0);

		@include xxl() {
			grid-template-columns: repeat(4, min-content);
		}
		@include xl() {
			grid-template-columns: repeat(4, min-content);
		}
		@include l() {
			grid-template-columns: repeat(2, min-content);
		}
		@include m() {
			grid-template-columns: repeat(2, min-content);
		}
		@include s() {
			grid-template-columns: repeat(1, min-content);
		}
	}
</style>
