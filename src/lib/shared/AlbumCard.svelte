<script lang="ts">
	import Headline7 from '$lib/shared/fontSystem/headlines/headline7/Headline7.svelte';
	import { onDestroy, onMount } from 'svelte';
	import ArrowButton from './ArrowButton.svelte';
	import type { Album } from './API';
	import { pb } from '$lib/feature/pocketbase';

	export let album: Album;

	let video: HTMLVideoElement;

	function play() {
		if (!touchScreen && video.readyState === 4) video.play();
	}

	function pause() {
		if (!touchScreen && video.readyState === 4) video.pause();
	}

	//

	let touchScreen = false;
	let media: MediaQueryList | undefined;

	function checkPointer() {
		touchScreen = media!.matches;
	}

	onMount(() => {
		media = matchMedia('(hover: none) and (pointer: coarse)');
		media.addEventListener('change', checkPointer);
		checkPointer();
	});

	onDestroy(() => {
		media?.removeEventListener('change', checkPointer);
	});

	const url = pb.files.getUrl(album, album.cover);
</script>

<a on:mouseover={play} on:mouseleave={pause} href={`/albums/${album.id}`}>
	<video src={url} loop muted bind:this={video} />
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

		video {
			border-radius: 8px;
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
		}
	}
</style>
