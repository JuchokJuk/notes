import { pb } from '$lib/feature/pocketbase';
import type { Album } from '$lib/shared/API';

export interface AlbumsData {
	albums: Album[];
}

export async function load() {
	const records: Album[] = await pb.collection('albums').getFullList({
		sort: '-created',
		requestKey: null
	});

	return {
		albums: records
	};
}
