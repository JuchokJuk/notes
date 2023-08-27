<script lang="ts">
	import Body7 from '$lib/shared/fontSystem/body/body7/Body7.svelte';
	import Headline4 from '$lib/shared/fontSystem/headlines/headline4/Headline4.svelte';
	import { albums } from '../../Albums';

	import { page } from '$app/stores';
	const id = Number($page.params.slug);
</script>

<div class="album">
	<div class="content">
		<Headline4>{albums[id].name}</Headline4>

		<div class="tracks">
			{#each albums[id].tracks as track}
				<audio src={track.url} controls />
			{/each}
		</div>
	</div>
	<div class="video">
		<video src={albums[id].videoUrl} loop muted autoplay />
		<Body7>{albums[id].description}</Body7>
	</div>
</div>

<style lang="scss">
	@import '@/styles/variables.scss';
	.album {
		display: flex;
		flex-direction: row;
		@include indent(margin-top, green);
		@include xxl() {
			@include column-gap(gap, 1);
		}
		@include xl() {
			@include column-gap(gap, 1);
		}
		@include l() {
			@include column-gap(gap, 1);
		}
		@include m() {
			@include column-gap(gap, 1);
		}
		@include s() {
			flex-direction: column;
			@include indent(gap, green);
		}
		.content {
			@include xxl() {
				@include column(6);
			}
			@include xl() {
				@include column(6);
			}
			@include l() {
				@include column(7);
			}
			@include m() {
				@include column(7);
			}
			@include s() {
				@include column(2);
			}

			.tracks {
				display: flex;
				flex-direction: column;
				@include indent(margin-top, green);

				@include indent(gap, blue-violet);

				audio {
					width: 100%;
				}
			}
		}
		.video {
			display: flex;
			flex-direction: column;
			@include indent(gap, steel-blue);
			video {
				width: 100%;
				border-radius: 8px;
			}
			color: var(--white-2);
			@include xxl() {
				@include column(5);
			}
			@include xl() {
				@include column(5);
			}
			@include l() {
				@include column(4);
			}
			@include m() {
				@include column(4);
			}
			@include s() {
				@include column(2);
			}
		}
	}
</style>
