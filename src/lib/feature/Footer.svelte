<script lang="ts">
	import WidthControl from './WidthControl.svelte';
	import Logo from '$lib/shared/icons/logo.svg?raw';
	import Button4 from '$lib/shared/fontSystem/button/button4/Button4.svelte';
</script>

<WidthControl>
	<div class="footer">
		<a class="footer__left" href="/">
			{@html Logo}
		</a>
		<div class="footer__right">
			<div class="footer__navigation">
				<div class="navigation__row">
					<a href="/#about"><Button4>Обо мне</Button4></a>
					<a href="/#catalog"><Button4>Каталог</Button4></a>
				</div>
				<div class="navigation__row">
					<a href="/#contacts"><Button4>Контакты</Button4></a>
					<a href="/account"><Button4>Мой аккаунт</Button4></a>
				</div>
			</div>
		</div>
	</div>
</WidthControl>

<img src="/images/blobs/3.png" />

<style lang="scss">
	@import '@/styles/variables.scss';

	a {
		white-space: nowrap;
	}

	img {
		position: absolute;
		left: 0;
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

			:global(svg) {
				fill: var(--white-1);
			}
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
			flex-wrap: wrap;
			justify-content: flex-end;
			@include indent(gap, steel-blue);

			.navigation__row {
				display: flex;
				flex-direction: row;
				@include indent(gap, steel-blue);
			}
		}
	}

	@include xxl() {
		.footer {
			padding-top: 38;
			padding-bottom: 38px;
			border-top: 2px solid var(--white-1);
			&__left {
				// @include column(5);
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
			border-top: 1.5px solid var(--white-1);
			&__left {
				// @include column(5);
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
			border-top: 1.5px solid var(--white-1);
			&__left {
				// @include column(5);
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
			border-top: 1.5px solid var(--white-1);
			&__left {
				// @include column(7);
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
			border-top: 1px solid var(--white-1);
			&__left {
				:global(svg) {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
</style>
