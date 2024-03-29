<script lang="ts">
	import { currentUser, pb } from '$lib/feature/pocketbase';
	import ArrowButton from '$lib/shared/ArrowButton.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import type { ExpandedTransaction, Product as ProductData } from '$lib/shared/API';
	import Headline6 from '$lib/shared/fontSystem/headlines/headline6/Headline6.svelte';
	import Audio1 from '$lib/shared/fontSystem/audio/audio1/Audio1.svelte';
	import Body7 from '$lib/shared/fontSystem/body/body7/Body7.svelte';

	let transactions: ExpandedTransaction[] = [];

	function signOut() {
		pb.authStore.clear();
	}

	async function getTransactions() {
		transactions = await pb.collection('transactions').getFullList({
			expand: 'product'
		});
	}

	async function getNotesLink(transaction: string, name: string) {
		try {
			const url = `${PUBLIC_SITE_URL}/notes`;

			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					transaction
				})
			});

			const data = await response.json();

			if (data.error !== undefined) {
				throw new Error(data.error);
			} else {
				const response = await fetch(data.url);
				const file = await response.blob();
				const objectURL = URL.createObjectURL(file);

				const downloadLink = document.createElement('a');
				downloadLink.href = objectURL;
				downloadLink.download = name;
				downloadLink.click();

				const link = document.createElement('a');
				link.href = data.url;
				link.target = '_blank';
				link.click();
			}
		} catch (e) {
			console.log(e);
		}
	}

	$: {
		if ($currentUser) getTransactions();
	}

	function getUrl(product: ProductData) {
		return pb.files.getUrl(product, product.audio);
	}
</script>

<Headline6>
	Вы вошли как {$currentUser?.email}
</Headline6>

<div class="description">
	<Body7>Здесь вы сможете скачать купленные PDF файлы</Body7>
</div>

<div class="button">
	<ArrowButton on:click={signOut}>Выйти</ArrowButton>
</div>

<div class="tracks">
	{#each transactions as transaction}
		<div class="container">
			<Audio1>{transaction.expand.product.name}</Audio1>
			<div class="column">
				<audio src={getUrl(transaction.expand.product)} controls />
				<ArrowButton
					on:click={() => {
						getNotesLink(transaction.id, transaction.expand.product.name);
					}}
				>
					Скачать PDF файл
				</ArrowButton>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '@/styles/variables.scss';
	.description {
		@include indent(margin-top, aquamarine);
		@include indent(margin-bottom, aquamarine);
	}
	.button {
		@include indent(margin-top, aquamarine);
	}
	.tracks {
		display: flex;
		flex-direction: column;
		@include indent(margin-top, green);

		@include indent(gap, steel-blue);

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
	}
</style>
