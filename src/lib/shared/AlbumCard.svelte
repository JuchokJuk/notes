<script lang="ts">
	import Headline7 from '$lib/shared/fontSystem/headlines/headline7/Headline7.svelte';
	// import { onDestroy, onMount } from 'svelte';
	import ArrowButton from './ArrowButton.svelte';
	import type { Album } from './API';
	// import { pb } from '$lib/feature/pocketbase';

	export let album: Album;
	export let note: 'quaver' | 'beam note';

	// let video: HTMLVideoElement;

	// function play() {
	// 	if (!touchScreen && video.readyState === 4) video.play();
	// }

	// function pause() {
	// 	if (!touchScreen && video.readyState === 4) video.pause();
	// }

	//

	// let touchScreen = false;
	// let media: MediaQueryList | undefined;

	// function checkPointer() {
	// 	touchScreen = media!.matches;
	// }

	// onMount(() => {
	// 	media = matchMedia('(hover: none) and (pointer: coarse)');
	// 	media.addEventListener('change', checkPointer);
	// 	checkPointer();
	// });

	// onDestroy(() => {
	// 	media?.removeEventListener('change', checkPointer);
	// });

	// const url = pb.files.getUrl(album, album.cover);
</script>
<!-- on:mouseover={play} on:mouseleave={pause} -->
<a  href={`/albums/${album.id}`}>
	<!-- <video src={url} loop muted bind:this={video} /> -->

	<div class="square">
		{#if note === 'quaver'}
			<svg viewBox="0 0 39 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-quaver">
				<path
					d="M19.78 47.7297C19.78 53.0832 15.4617 57.4189 10.14 57.4189C4.81825 57.4189 0.5 53.0832 0.5 47.7297C0.5 42.3762 4.81825 38.0405 10.14 38.0405C15.4617 38.0405 19.78 42.3762 19.78 47.7297Z"
					stroke="white"
				/>
				<line x1="19.7798" y1="48.0989" x2="19.7798" y2="0.288067" stroke="white" />
				<line x1="38.415" y1="0.5" x2="19.695" y2="0.499989" stroke="white" />
			</svg>
		{:else}
			<svg
				width="34"
				height="32"
				viewBox="0 0 34 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="rotate-beam-note"
			>
				<ellipse cx="6.68179" cy="25.5632" rx="5.51724" ry="5.66038" stroke="white" />
				<ellipse cx="27.3712" cy="25.3396" rx="5.51724" ry="5.66038" stroke="white" />
				<path
					d="M12.1992 25.3396V6.46276M12.1992 6.46276H32.8889M12.1992 6.46276V1H32.8889V6.46276M32.8889 25.2182V6.46276"
					stroke="white"
				/>
			</svg>
		{/if}
	</div>

	<Headline7>{album.name}</Headline7>
	<ArrowButton>Слушать</ArrowButton>
</a>

<style lang="scss">
	@import '@/styles/variables.scss';
	a {
		cursor: pointer;
		border-radius: 8px;
		border: 1px solid var(--white-1);

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;

		@include xxl() {
			@include indent(padding, blue-violet);
			@include indent(gap, blue-violet);
		}
		@include xl() {
			@include indent(padding, blue-violet);
			@include indent(gap, blue-violet);
		}
		@include l() {
			@include indent(padding, blue-violet);
			@include indent(gap, blue-violet);
		}
		@include m() {
			@include indent(padding, gold);
			@include indent(gap, gold);
		}
		@include s() {
			@include indent(padding, blue-violet);
			@include indent(gap, gold);
		}

		// video {
		// 	border-radius: 8px;
		// 	@include xxl() {
		// 		width: 335px;
		// 		height: 335px;
		// 	}
		// 	@include xl() {
		// 		width: 278px;
		// 		height: 278px;
		// 	}
		// 	@include l() {
		// 		width: 247px;
		// 		height: 247px;
		// 	}
		// 	@include m() {
		// 		width: 284px;
		// 		height: 284px;
		// 	}
		// 	@include s() {
		// 		width: 238px;
		// 		height: 238px;
		// 	}
		// }
		.square {
			@include xxl() {
				width: 335px;
				height: 335px;
			}
			@include xl() {
				width: 278px;
				height: 278px;
			}
			@include l() {
				width: 247px;
				height: 247px;
			}
			@include m() {
				width: 284px;
				height: 284px;
			}
			@include s() {
				width: 238px;
				height: 238px;
			}

			display: flex;
			justify-content: center;
			align-items: center;

			svg {
				height: 50%;
				width: 50%;
				&.rotate-quaver {
					animation: rotate-quaver 6s ease-in-out infinite;
				}
				&.rotate-beam-note {
					animation: rotate-beam-note 6s ease-in-out infinite;
				}
			}
		}
		@keyframes rotate-quaver {
			0% {
				transform: rotate3d(0, 1, 0, -45deg) rotate3d(1, 1, 1, -2deg) translateY(-16px);
			}
			50% {
				transform: rotate3d(0, 1, 0, 45deg) rotate3d(1, 1, 1, 2deg) translateY(16px);
			}
			100% {
				transform: rotate3d(0, 1, 0, -45deg) rotate3d(1, 1, 1, -2deg) translateY(-16px);
			}
		}

		@keyframes rotate-beam-note {
			0% {
				transform: rotate3d(0, 1, 0, 45deg) rotate3d(1, 1, 1, 2deg) translateY(16px);
			}
			50% {
				transform: rotate3d(0, 1, 0, -45deg) rotate3d(1, 1, 1, -2deg) translateY(-16px);
			}
			100% {
				transform: rotate3d(0, 1, 0, 45deg) rotate3d(1, 1, 1, 2deg) translateY(16px);
			}
		}
	}
</style>
