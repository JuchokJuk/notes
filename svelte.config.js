import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),

		prerender: {
			crawl: true,
			entries: ['*', '/albums/0', '/albums/1', '/albums/2', '/albums/3']
		}
	}
};

export default config;