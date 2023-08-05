<script lang="ts">
	$: isOpened = false;
	function burgerClick(): void {
		if (isOpened) {
			isOpened = false;
		} else {
			isOpened = true;
		}
		console.log('click', isOpened);
	}
</script>

<div class="burger" on:click={burgerClick} class:opened={isOpened}>
	<div class="burger__line burger__line-first" />
	<div class="burger__line burger__line-second" />
	<div class="burger__line burger__line-third" />
</div>

<style lang="scss">
	@import '@/styles/variables.scss';

	.burger {
		display: flex;
		flex-direction: column;
		&__line {
			background: $white-1;
			transition: transform 0.4s;
		}
	}
	.opened {
		.burger__line-first {
			@include xxl() {
				transform: translateY(12px) rotateZ(45deg);
			}
			@include xl() {
				transform: translateY(12px) rotateZ(45deg);
			}
			@include l() {
				transform: translateY(12px) rotateZ(45deg);
			}
			@include m() {
				transform: translateY(10px) rotateZ(45deg);
			}
			@include s() {
				transform: translateY(9px) rotateZ(45deg);
			}
		}
		.burger__line-second {
			transform: rotateY(90deg);
		}
		.burger__line-third {
			@include xxl() {
				transform: translateY(-12px) rotateZ(-45deg);
			}
			@include xl() {
				transform: translateY(-12px) rotateZ(-45deg);
			}
			@include l() {
				transform: translateY(-12px) rotateZ(-45deg);
			}
			@include m() {
				transform: translateY(-10px) rotateZ(-45deg);
			}
			@include s() {
				transform: translateY(-9px) rotateZ(-45deg);
			}
		}
	}

	@media (min-width: $min-screen-xxl) {
		.burger {
			width: 36px;
			gap: 10px;
			&__line {
				height: 2px;
			}
		}
	}
	@media (min-width: $min-screen-xl) and (max-width: $max-screen-xl) {
		.burger {
			width: 36px;
			gap: 10px;
			&__line {
				height: 2px;
			}
		}
	}
	@media (min-width: $min-screen-l) and (max-width: $max-screen-l) {
		.burger {
			width: 36px;
			gap: 10px;
			&__line {
				height: 2px;
			}
		}
	}
	@media (min-width: $min-screen-m) and (max-width: $max-screen-m) {
		.burger {
			width: 34px;
			gap: 8px;
			&__line {
				height: 2px;
			}
		}
	}
	@media (max-width: $max-screen-s) {
		.burger {
			width: 30px;
			gap: 8px;
			&__line {
				height: 1px;
			}
		}
	}
</style>
