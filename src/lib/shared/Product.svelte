<script lang="ts">
	import { pb } from '$lib/feature/pocketbase';
	import type { Product } from './API';
	import ArrowButton from './ArrowButton.svelte';
	import Audio1 from './fontSystem/audio/audio1/Audio1.svelte';
	import { currentUser } from '$lib/feature/pocketbase';

	import { PUBLIC_SITE_URL } from '$env/static/public';

	export let product: Product;
	export let openModal: () => void;

	const url = pb.files.getUrl(product, product.audio);

	async function buy(product: string) {
		if ($currentUser) {
			const url = `${PUBLIC_SITE_URL}/payment`;
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					user: $currentUser?.id,
					product
				})
			});
			const data = await response.json();
			window.location.href = data.payment.confirmation.confirmation_url;
		} else {
			openModal();
		}
	}
</script>

<div class="container">
	<Audio1>{product.name}</Audio1>
	<div class="column">
		<audio src={url} controls />
		<ArrowButton
			on:click={() => {
				buy(product.id);
			}}
		>
			Купить за {product.price} ₽
		</ArrowButton>
	</div>
</div>

<style lang="scss">
	@import '@/styles/variables.scss';
	.container {
		display: flex;
		flex-direction: column;
		@include indent(gap, blue-violet);

		.column {
			display: flex;
			flex-direction: column;
			@include indent(gap, aquamarine);
			audio {
				width: 100%;
			}
		}
	}
</style>
