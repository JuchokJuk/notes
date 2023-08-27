<script lang="ts">
	import Arrow from '$lib/shared/icons/arrow.svg?raw';
	import Button1 from '$lib/shared/fontSystem/button/button1/Button1.svelte';
</script>

<button>
	<Button1>
		<slot />
	</Button1>
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
			padding: 22px 94px;
		}
		@include xl() {
			padding: 18px 78px;
		}
		@include l() {
			padding: 16px 78px;
		}
		@include m() {
			padding: 16px 78px;
		}
		@include s() {
			padding: 14px 78px;
		}

		:global(svg) {
			transition: transform 0.4s, fill 0.4s;
			@include indent(margin-left, aquamarine);
			fill: var(--white-1);

			@include xxl() {
				width: 28px;
			}
			@include xl() {
				width: 22.25px;
			}
			@include l() {
				width: 17.38px;
			}
			@include m() {
				width: 16px;
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
