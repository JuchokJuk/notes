<script lang="ts">
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import { currentUser } from '$lib/feature/pocketbase';
	import SignUpForm from '$lib/shared/SignUpForm.svelte';
	import Products from '$lib/feature/routes/account/Products.svelte';
</script>

<svelte:head>
	<title>Мой аккаунт</title>
</svelte:head>

<WidthControl>
	<div class="page">
		{#if $currentUser}
			<Products />
		{:else}
			<SignUpForm />
		{/if}
	</div>
</WidthControl>

<style lang="scss">
	@import '@/styles/variables.scss';
	.page {
		@include indent(margin-top, red);
		@include indent(margin-bottom, red);
		margin-left: auto;
		margin-right: auto;

		@include column(6);

		@include m {
			@include column(8);
		}

		@include s {
			@include column(2);
		}
	}
</style>
