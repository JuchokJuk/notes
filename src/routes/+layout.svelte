<script lang="ts">
	import { breakpointStore, s, m, l, xl, xxl } from '../lib/feature/breakpointsStore';

	import '../styles/global.scss';

	import Footer from '$lib/feature/Footer.svelte';
	import Header from '$lib/feature/Header.svelte';

	const screenXxl = 2300;
	const screenXl = 1680;
	const screenL = 1024;
	const screenM = 768;

	let innerWidth: number;
	let breakpoint: number;

	$: {
		if (innerWidth >= screenXxl) {
			breakpoint = xxl;
		} else if (innerWidth < screenXxl && innerWidth >= screenXl) {
			breakpoint = xl;
		} else if (innerWidth < screenXl && innerWidth >= screenL) {
			breakpoint = l;
		} else if (innerWidth < screenL && innerWidth >= screenM) {
			breakpoint = m;
		} else if (innerWidth < screenM) {
			breakpoint = s;
		}
		breakpointStore.update(() => breakpoint);
	}
</script>

<svelte:window bind:innerWidth />

<div class="layout">
	<div class="content">
		<Header />
		<slot />
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style lang="scss" global>
	@import '@/styles/variables.scss';
	.layout {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.content {
		flex: 1 0 auto;
	}

	.footer {
		position: relative;
		flex: 0 0 auto;
	}
</style>
