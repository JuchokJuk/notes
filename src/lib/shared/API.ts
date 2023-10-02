interface Record {
	id: string;
	created: string;
	updated: string;
}

export interface Album extends Record {
	collectionId: string;
	collectionName: string;
	cover: string;
	description: string;
	name: string;
	products: Product[];
}

export interface Product extends Record {
	name: string;
	collectionId: string;
	collectionName: string;
	price: string;
	audio: string;
	notes: string[];
}

export interface Transaction extends Record {
	payment: string;
	user: string;
	product: string;
}

export interface ExpandedTransaction extends Transaction {
	expand: {
		product: Product;
	};
}

export interface ExpandedAlbum extends Album {
	expand: {
		products?: Product[];
	};
}
