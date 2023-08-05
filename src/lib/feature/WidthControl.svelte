<div class="width-control">
	<slot />
</div>

<style lang="scss">
	@import '@/styles/variables.scss';

	.width-control {
		margin-left: auto;
		margin-right: auto;
	}

	@include xxl() {
		.width-control {
			width: $content-xxl;
		}
	}
	@include xl() {
		.width-control {
			width: $content-xl;
		}
	}
	@include l() {
		.width-control {
			width: $content-l;
		}
	}
	@include m() {
		.width-control {
			width: $content-m;
		}
	}
	@include s() {
		.width-control {
			width: $content-s;
		}
	}
</style>
