<script lang="ts">
	import { clickOutside } from './clickOutside';

	export let closeModal: () => void;
</script>

<div class="container">
	<div class="wrapper">
		<div class="modal" use:clickOutside={closeModal}>
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	@import '@/styles/variables.scss';

	.container {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--black-1-80);
		overflow: auto;
		.wrapper {
			max-height: 100%;
			.modal {
				@include indent(padding-top, pink);
				@include indent(padding-bottom, pink);
				@include indent(padding-left, gold);
				@include indent(padding-right, gold);
				border: 1.5px solid var(--white-1);
				background: var(--black-1);
				border-radius: 16px;

				@include column(6);

				@include m {
					@include column(8);
				}

				@include s {
					@include column(2);
				}
			}
		}
	}
</style>
