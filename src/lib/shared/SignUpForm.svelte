<script lang="ts">
	import { currentUser, pb } from '$lib/feature/pocketbase';
	import ArrowButton from '$lib/shared/ArrowButton.svelte';
	import Input from '$lib/shared/Input.svelte';

	import { slide } from 'svelte/transition';
	import Headline6 from './fontSystem/headlines/headline6/Headline6.svelte';

	let email: string;
	let password: string;

	let error: any;

	async function signUp() {
		try {
			await pb.collection('users').create({
				email,
				password,
				passwordConfirm: password
			});

			await pb.collection('users').requestVerification(email);
			await signIn();
		} catch (e) {
			error = e;
		}
	}

	async function signIn() {
		try {
			await pb.collection('users').authWithPassword(email, password);
		} catch (e) {
			error = e;
		}
	}

	function clearError() {
		if (error?.data?.message) {
			error.data.message = undefined;
		}
	}

	$: {
		if ($currentUser) error = undefined;
	}
</script>

<div class="form">
	<div class="header">
		<Headline6>Войдите в свой аккаунт или создайте новый, чтобы совершать покупки</Headline6>
	</div>
	<div class="inputs">
		<Input
			onInput={clearError}
			bind:value={email}
			type="email"
			error={error?.data?.data?.identity?.message || error?.data?.data?.email?.message}>Почта</Input
		>
		<Input
			onInput={clearError}
			bind:value={password}
			type="password"
			error={error?.data?.data?.password?.message}>Пароль</Input
		>
	</div>

	<div class="buttons">
		<ArrowButton on:click={signIn}>Войти</ArrowButton>
		<ArrowButton on:click={signUp}>Зарегистрироваться</ArrowButton>
	</div>

	{#if error?.data?.message}
		<div class="error" transition:slide={{ duration: 400 }}>{error?.data?.message}</div>
	{/if}
</div>

<style lang="scss">
	@import '@/styles/variables.scss';
	.form {
		.header {
			@include indent(margin-bottom, green);
		}

		.inputs {
			display: flex;
			flex-direction: column;
			@include indent(gap, aqua);

			@include indent(margin-bottom, green);
		}

		.buttons {
			display: flex;
			flex-direction: column;
			@include indent(gap, aqua);
		}

		.error {
			@include indent(margin-top, green);
			color: red;
		}
	}
</style>
