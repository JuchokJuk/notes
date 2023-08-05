<script lang="ts">
	import Body1 from '$lib/shared/fontSystem/body/body1/Body1.svelte';
	// import Body10 from "$lib/shared/fontSystem/body/body10/Body10.svelte";
	import Body3 from '$lib/shared/fontSystem/body/body3/Body3.svelte';
	// import Body5 from "$lib/shared/fontSystem/body/body5/Body5.svelte";
	import Headline1 from '$lib/shared/fontSystem/headlines/headline1/Headline1.svelte';
	// import Headline5 from "$lib/shared/fontSystem/headlines/headline5/Headline5.svelte";
	import WidthControl from '$lib/feature/WidthControl.svelte';
</script>

<WidthControl>
	<div class="header-container" id="contacts">
		<Headline1>Контакты.</Headline1>
	</div>

	<div class="contacts">
		<div class="row">
			<div class="title">
				<Body3>Почта</Body3>
			</div>
			<div class="contact">
				<Body1>vladimir-rostov@mail.ru</Body1>
			</div>
		</div>

		<div class="row">
			<div class="title">
				<Body3>Телефон</Body3>
			</div>
			<div class="contact">
				<Body1>+7 (906) 183-06-49</Body1>
			</div>
		</div>
	</div>
</WidthControl>

<style lang="scss">
	@import '@/styles/variables.scss';

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid $white-1;
		border-bottom: 1px solid $white-1;

		@include indent(margin-bottom, pink);

		@include xxl() {
			height: 264px;
		}
		@include xl() {
			height: 216px;
		}
		@include l() {
			height: 142px;
		}
		@include m() {
			height: 104px;
		}
		@include s() {
			height: 90px;
		}
	}

	.contacts {
		display: grid;
		grid-template-rows: 1fr 1fr;
		@include indent(margin-bottom, red);
		@include indent(gap, lime);

		.row {
			border-bottom: 1px solid $white-1;

			@include xxl() {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				@include indent(padding-bottom, aqua);
			}
			@include xl() {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				@include indent(padding-bottom, aqua);
			}
			@include l() {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				@include indent(padding-bottom, aqua);
			}
			@include m() {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				@include indent(padding-bottom, aqua);
			}
			@include s() {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				flex-direction: column;
			}

			.title {
				@include s() {
					width: 100%;
					@include indent(padding-bottom, aqua);
					border-bottom: 1px solid $white-1;
				}
			}
			.contact {
				@include s() {
					height: 80px;
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>
