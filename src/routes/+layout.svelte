<script lang="ts">
	import { breakpointStore, s, m, l, xl, xxl } from '../lib/feature/breakpointsStore';
	import '../styles/global.scss';

	import Footer from '$lib/feature/Footer.svelte';
	import Header from '$lib/feature/Header.svelte';
	import { onMount } from 'svelte';
	import { currentUser, pb } from '$lib/feature/pocketbase';

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

	onMount(() => {
		let device_uuid = localStorage.getItem('device_uuid');

		if (device_uuid === null) {
			const newDeviceUuid = crypto.randomUUID();
			localStorage.setItem('device_uuid', crypto.randomUUID());
			device_uuid = newDeviceUuid;
		}

		const data = {
			user: $currentUser?.id,
			device_uuid
		};

		pb.collection('views').create(data);
	});

	import { afterNavigate } from '$app/navigation';

	let header: HTMLDivElement;

	afterNavigate(() => {
		console.log('fix scroll position');
		header.scrollIntoView({ behavior: 'instant' });
	});
</script>

<svelte:window bind:innerWidth />

<div class="layout">
	<div class="content" bind:this={header}>
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
		scroll-behavior: smooth;
	}

	.content {
		flex: 1 0 auto;
	}

	.footer {
		position: relative;
		flex: 0 0 auto;
	}
</style>
