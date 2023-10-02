import { pb } from '$lib/feature/pocketbase';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const [album, recommendations] = await Promise.all([
		pb.collection('albums').getOne(params.slug, {
			expand: 'products',
			requestKey: null
		}),
		pb.collection('albums').getFullList({
			filter: `id != "${params.slug}"`,
			sort: '-created',
			requestKey: null
		})
	]);

	return {
		slug: params.slug,
		album,
		recommendations
	};
}
