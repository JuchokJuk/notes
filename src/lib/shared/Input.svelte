<script lang="ts">
	import { slide } from 'svelte/transition';
	export let type: 'text' | 'email' | 'password';
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let error: string | undefined = undefined;

	export let onInput: (() => void) | undefined = undefined;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}

	function input() {
		error = undefined;
		if (onInput) onInput();
	}
</script>

<label class:error>
	<div class="label">
		<slot />
	</div>
	<input on:input={input} bind:value type="text" {placeholder} use:typeAction />
	{#if error}
		<div class="error-message" transition:slide={{ duration: 400 }}>
			{error}
		</div>
	{/if}
</label>

<style lang="scss">
	@import '@/styles/variables.scss';
	@import './fontSystem/button/button4/button4.scss';
	@import './fontSystem/body/body10/body10.scss';

	label {
		display: flex;
		flex-direction: column;

		.label {
			margin-bottom: 8px;
		}

		.error-message {
			margin-top: 8px;
		}

		@include body10();

		&.error {
			color: red;
		}

		input {
			@include button4();
			width: 100%;
			cursor: pointer;
			border: 1.5px solid var(--white-1);
			display: flex;
			justify-content: center;
			align-items: center;

			transition: box-shadow 0.4s;

			@include round-border();

			@include hover() {
				box-shadow: 0 0 0 0 var(--white-1), 0 0 0 6px var(--white-4);
			}
			&:focus {
				box-shadow: 0 0 0 1px var(--white-1), 0 0 0 6px var(--white-3);
				outline: none;
			}

			@include xxl() {
				padding: 16px 24px;
			}
			@include xl() {
				padding: 11px 18px;
			}
			@include l() {
				padding: 10.5px 16px;
			}
			@include m() {
				padding: 10.5px 16px;
			}
			@include s() {
				padding: 11px 18px;
			}
		}
	}
</style>
