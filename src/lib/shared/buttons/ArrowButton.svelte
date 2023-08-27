<script lang="ts">
	import Arrow from '$lib/shared/icons/arrow.svg?raw';
	import Button4 from '$lib/shared/fontSystem/button/button4/Button4.svelte';
</script>

<button on:click>
	<Button4>
		<slot />
	</Button4>
	{@html Arrow}
</button>

<style lang="scss">
	@import '@/styles/variables.scss';

	button {
		cursor: pointer;
		border: 1.5px solid var(--white-1);
		display: flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.4s, color 0.4s;

		@include round-border();

		@include hover() {
			background: var(--white-1);
			color: var(--black-1);
		}

		@include xxl() {
			padding: 16px 64px;
		}
		@include xl() {
			padding: 11px 40px;
		}
		@include l() {
			padding: 10.5px 38px;
		}
		@include m() {
			padding: 10.5px 38px;
		}
		@include s() {
			padding: 11px 40px;
		}

		:global(svg) {
			transition: transform 0.4s, fill 0.4s;
			@include indent(margin-left, aquamarine);
			fill: var(--white-1);

			@include xxl() {
				width: 18.17px;
			}
			@include xl() {
				width: 15px;
			}
			@include l() {
				width: 15px;
			}
			@include m() {
				width: 15px;
			}
			@include s() {
				width: 15px;
			}
		}
	}
	:global(button:hover svg) {
		@media (hover: hover) and (pointer: fine) {
			transform: translateX(0.25em);
			fill: var(--black-1);
		}
	}
</style>
