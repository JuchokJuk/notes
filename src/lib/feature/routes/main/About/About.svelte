<script lang="ts">
	import Body10 from '$lib/shared/fontSystem/body/body10/Body10.svelte';
	import Body5 from '$lib/shared/fontSystem/body/body5/Body5.svelte';
	import Headline1 from '$lib/shared/fontSystem/headlines/headline1/Headline1.svelte';
	import Headline5 from '$lib/shared/fontSystem/headlines/headline5/Headline5.svelte';
	import WidthControl from '$lib/feature/WidthControl.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide/components';
	import '@splidejs/svelte-splide/css/splide-core.min.css';
	import './splide.scss';
</script>

<div class="about-container" id="about">
	<WidthControl>
		<div class="header-container">
			<Headline1>Обо мне.</Headline1>
		</div>

		<div class="about">
			<div class="person">
				<div class="photo">
					<img src="/images/photo.png" alt="Фото Владимира" />
				</div>
				<div class="name">
					<Headline5>ГУРКИН ВЛАДИМИР</Headline5>
				</div>
				<div class="message">
					<Body10>
						Люблю музыку разных жанров.
						<br />
						Главное, чтобы музыка была понятна для ума, приятна для слуха, доходящая до самого сердца,
						и проникающая до глубины души
					</Body10>
				</div>
			</div>

			<div class="text">
				<div class="header">
					<Body5>
						Меня зовут Гуркин Владимир Викторович. Представляю на этом сайте свои гитарные
						произведения, написанные в жанре инструментальной миниатюры.
					</Body5>
				</div>
				<div class="subtext-1">
					<Body10>
						Родился в 1947 году, учился в "РУИ", работал в "ДШИ №3 им. М.И.Глинки", "ДШИ №7 им.
						Г.М.Балаева" преподавателем по классу "Классическая Гитара" в городе Ростове-на-Дону и
						проживаю здесь с рождения и по настоящее время.
					</Body10>
				</div>
				<div class="subtext-2">
					<Body10>
						Моими любимыми композиторами являются В.А. Моцарт и П. И. Чайковский. Среди российских
						гитарных авторов мне близко творчество А.М.Иванова-Крамского, которое оказало
						непосредственное влияние на моё формирование как гитарного композитора.
					</Body10>
				</div>
			</div>
		</div>
	</WidthControl>

	<Splide
		options={{
			pagination: false,
			autoplay: true,
			type: 'loop',
			focus: 'center',
			gap: '16px',
			autoWidth: true,
			arrowPath:
				'M4.55135 21.6831L29.0255 21.6831L20.1443 30.5919L22.5169 32.9717L35.4486 20L22.5169 7.02809L20.1443 9.40803L29.0255 18.3168H4.55135V21.6831Z'
		}}
	>
		<SplideSlide>
			<img class="about__slide" src="/images/1.png" width="831" height="532" />
		</SplideSlide>
		<SplideSlide>
			<img class="about__slide" src="/images/2.png" width="831" height="532" />
		</SplideSlide>
		<SplideSlide>
			<img class="about__slide" src="/images/3.png" width="831" height="532" />
		</SplideSlide>
		<SplideSlide>
			<img class="about__slide" src="/images/4.png" width="831" height="532" />
		</SplideSlide>
		<SplideSlide>
			<img class="about__slide" src="/images/5.png" width="831" height="532" />
		</SplideSlide>
		<SplideSlide>
			<img class="about__slide" src="/images/6.png" width="831" height="532" />
		</SplideSlide>
	</Splide>
</div>

<style lang="scss">
	@import '@/styles/variables.scss';
	.about-container {
		background: url('/images/blobs/2.png') no-repeat center right;
		background-size: contain;

		@include indent(margin-bottom, red);

		.about__slide {
			width: auto;
			@include xxl() {
				height: 532px;
			}
			@include xl() {
				height: 438px;
			}
			@include l() {
				height: 388px;
			}
			@include m() {
				height: 288px;
			}
			@include s() {
				height: 179px;
			}
		}
	}
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--white-1);
		border-bottom: 1px solid var(--white-1);
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

	.about {
		@include indent(margin-bottom, pink);
		display: grid;
		@include column-gap(gap, 0);
		@include xxl() {
			grid-template-columns: auto auto;
		}
		@include xl() {
			grid-template-columns: auto auto;
		}
		@include l() {
			grid-template-columns: auto auto;
		}
		@include m() {
			grid-template-columns: auto auto;
		}
		@include s() {
			grid-template-columns: auto;
		}
		.person {
			@include xxl() {
				@include column(5);
			}
			@include xl() {
				@include column(5);
			}
			@include l() {
				@include column(5);
			}
			@include m() {
				@include column(5);
			}
			@include s() {
				@include column(2);
			}
			.photo {
				@include indent(margin-bottom, blue);
				img {
					border-top-left-radius: 9999px;
					border-top-right-radius: 9999px;
					width: 100%;
				}
			}
			.name {
				@include indent(padding-bottom, steel-blue);
			}
			.message {
				@include indent(padding-top, steel-blue);
				border-top: 1px solid var(--white-1);
			}
		}
		.text {
			@include xxl() {
				@include column(6);
			}
			@include xl() {
				@include column(6);
			}
			@include l() {
				@include column(6);
			}
			@include m() {
				@include column(6);
			}
			@include s() {
				@include column(2);
			}

			@include indent(margin-top, teal);

			.header {
				@include indent(padding-bottom, teal);
			}
			.subtext-1 {
				border-top: 1px solid var(--white-1);
				@include indent(padding-top, teal);
				@include indent(padding-bottom, teal);
			}
			.subtext-2 {
				border-top: 1px solid var(--white-1);
				@include indent(padding-top, teal);
			}
		}
	}
</style>
