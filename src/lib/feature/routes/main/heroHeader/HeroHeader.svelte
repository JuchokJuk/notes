<script lang="ts">
	import Body2 from '$lib/shared/fontSystem/body/body2/Body2.svelte';
	import Body10 from '$lib/shared/fontSystem/body/body10/Body10.svelte';
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import Headline1 from '$lib/shared/fontSystem/headlines/headline1/Headline1.svelte';
	import Note from '$lib/shared/icons/note.svg?raw';
	import ArrowButton from '$lib/shared/ArrowButton.svelte';
</script>

<WidthControl>
	<div class="hero-header-container">
		<img src="/images/blobs/1.png" />
		<div class="hero-header">
			<div class="hero-header__top">
				<div class="headline">
					<Headline1>Произведения</Headline1>
				</div>
				<div class="hero-header__top__author">
					<div class="hero-header__top__author-wrapper">
						<Body10>Автор</Body10>
						<div class="name">
							<Body2>ГУРКИН{' '}</Body2>
							<Body2>ВЛАДИМИР</Body2>
						</div>
					</div>
				</div>
			</div>
			<div class="hero-header__bottom">
				<div class="hero-header__bottom__genre">
					<Body10>Жанр: Инструментальные миниатюры</Body10>
				</div>
				<div class="note">
					{@html Note}
				</div>
				<div class="headline">
					<Headline1>Для гитары.</Headline1>
				</div>
			</div>
		</div>
		<div class="buttons-container">
			<a href="#catalog">
				<ArrowButton large>СЛУШАТЬ</ArrowButton>
			</a>
			<a href="#catalog">
				<ArrowButton large>ПРИОБРЕСТИ</ArrowButton>
			</a>
		</div>
	</div>
</WidthControl>

<style lang="scss">
	@import './styles/main.scss';
	@import './styles/breakpoint1.scss';
	@import './styles/breakpoint2.scss';
	@import './styles/breakpoint3.scss';
	@import './styles/breakpoint4.scss';
	@import './styles/breakpoint5.scss';
</style>
