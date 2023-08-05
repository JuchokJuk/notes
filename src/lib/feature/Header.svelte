<script lang="ts">
	import WidthControl from './WidthControl.svelte';
	import Logo from '$lib/shared/icons/logo.svg?raw';
	import Link from '$lib/shared/Link.svelte';
</script>

<WidthControl>
	<div class="header">
		<a class="header__left" href="/">
			{@html Logo}
		</a>
		<div class="header__right">
			<div class="header__navigation">
				<Link href={`/#about`}>Обо мне</Link>
				<Link href={`/#catalog`}>Каталог</Link>
				<Link href={`/#contacts`}>Контакты</Link>
			</div>
		</div>
	</div>
</WidthControl>

<style lang="scss">
	@import '@/styles/variables.scss';

	.header {
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
		.header {
			padding-top: 38px;
			padding-bottom: 38px;
			border-bottom: 2px solid $white-1;
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
		.header {
			padding-top: 26px;
			padding-bottom: 26px;
			border-bottom: 1.5px solid $white-1;
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
		.header {
			padding-top: 26px;
			padding-bottom: 26px;
			border-bottom: 1.5px solid $white-1;
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
		.header {
			padding-top: 22px;
			padding-bottom: 22px;
			border-bottom: 1.5px solid $white-1;
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
		.header {
			padding-top: 16px;
			padding-bottom: 16px;
			border-bottom: 1px solid $white-1;
			&__left {
				:global(svg) {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
</style>
