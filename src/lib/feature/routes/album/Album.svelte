<script lang="ts">
	import Body7 from '$lib/shared/fontSystem/body/body7/Body7.svelte';
	import Headline4 from '$lib/shared/fontSystem/headlines/headline4/Headline4.svelte';
	import { fade } from 'svelte/transition';

	import Product from '$lib/shared/Product.svelte';
	import type { ExpandedAlbum } from '$lib/shared/API';
	import { currentUser, pb } from '$lib/feature/pocketbase';
	import SignUpForm from '$lib/shared/SignUpForm.svelte';
	import Modal from './Modal/Modal.svelte';
	export let album: ExpandedAlbum;

	const url = pb.files.getUrl(album, album.cover);

	let modalOpen = false;

	function closeModal() {
		modalOpen = false;
	}

	function openModal() {
		modalOpen = true;
	}
</script>

<div class="album">
	<div class="content">
		<Headline4>{album.name}</Headline4>

		<div class="description">
			<Body7>Скачать купленные PDF файлы можно в <a href="/account">вашем аккаунте</a></Body7>
		</div>

		{#if album.expand?.products}
			<div class="tracks">
				{#each album.expand.products as product}
					<Product {product} {openModal} />
				{/each}
			</div>
		{/if}
	</div>
	<div class="video">
		<video src={url} loop muted autoplay />
		<Body7>{album.description}</Body7>
	</div>
</div>

{#if !$currentUser && modalOpen}
	<div transition:fade={{ duration: 400 }}>
		<Modal {closeModal}>
			<SignUpForm />
		</Modal>
	</div>
{/if}

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
			flex-direction: column-reverse;
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
			.description {
				@include indent(margin-top, aquamarine);
				a {
					text-decoration: underline;
				}
			}
			.tracks {
				display: flex;
				flex-direction: column;
				@include indent(margin-top, green);

				@include indent(gap, steel-blue);
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
