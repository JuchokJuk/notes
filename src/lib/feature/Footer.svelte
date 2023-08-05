<script lang="ts">
	import WidthControl from './WidthControl.svelte';
	import Logo from '$lib/shared/icons/logo.svg?raw';
	import Link from '$lib/shared/Link.svelte';
</script>

<WidthControl>
	<div class="footer">
		<a class="footer__left" href="/">
			{@html Logo}
		</a>
		<div class="footer__right">
			<div class="footer__navigation">
				<Link href={`/#about`}>Обо мне</Link>
				<Link href={`/#catalog`}>Каталог</Link>
				<Link href={`/#contacts`}>Контакты</Link>
			</div>
		</div>
	</div>
</WidthControl>

<img src="/images/blobs/3.png" />

<style lang="scss">
	@import '@/styles/variables.scss';

	img {
		position: absolute;
		left:0;
		bottom: 0;
		z-index: -1;
		width: 75%;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		&__left {
			display: flex;
			flex-direction: row;
			align-items: center;
			@include indent(gap, green);
		}
		&__right {
			display: flex;
			flex-direction: row;
			align-items: center;
			@include indent(gap, green);
		}
		&__navigation {
			display: flex;
			flex-direction: row;
			@include indent(gap, steel-blue);
		}
	}

	@include xxl() {
		.footer {
			padding-top: 38px;
			padding-bottom: 38px;
			border-top: 2px solid $white-1;
			&__left {
				@include column(5);
				:global(svg) {
					width: 60px;
					height: 60px;
				}
			}
		}
	}
	@include xl() {
		.footer {
			padding-top: 26px;
			padding-bottom: 26px;
			border-top: 1.5px solid $white-1;
			&__left {
				@include column(5);
				:global(svg) {
					width: 44px;
					height: 44px;
				}
			}
		}
	}
	@include l() {
		.footer {
			padding-top: 26px;
			padding-bottom: 26px;
			border-top: 1.5px solid $white-1;
			&__left {
				@include column(5);
				:global(svg) {
					width: 44px;
					height: 44px;
				}
			}
		}
	}
	@include m() {
		.footer {
			padding-top: 22px;
			padding-bottom: 22px;
			border-top: 1.5px solid $white-1;
			&__left {
				@include column(7);
				:global(svg) {
					width: 44px;
					height: 44px;
				}
			}
		}
	}
	@include s() {
		.footer {
			padding-top: 16px;
			padding-bottom: 16px;
			border-top: 1px solid $white-1;
			&__left {
				:global(svg) {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
</style>
