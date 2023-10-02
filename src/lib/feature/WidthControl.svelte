<div class="width-control">
	<slot />
</div>

<style lang="scss">
	@import '@/styles/variables.scss';

	.width-control {
		margin-left: auto;
		margin-right: auto;
		@include xxl() {
			width: $content-xxl;
		}
		@include xl() {
			width: $content-xl;
		}
		@include l() {
			width: $content-l;
		}
		@include m() {
			width: $content-m;
		}
		@include s() {
			width: $content-s;
		}
	}
</style>
