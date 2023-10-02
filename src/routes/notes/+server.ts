import PocketBase from 'pocketbase';
import { json } from '@sveltejs/kit';
import { YooCheckout } from '@a2seven/yoo-checkout';

import { YOOKASSA_SECRET_KEY } from '$env/static/private';
import { YOOKASSA_SHOP_ID } from '$env/static/private';

import { POCKETBASE_ADMIN_EMAIL } from '$env/static/private';
import { POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';

import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

const checkout = new YooCheckout({ shopId: YOOKASSA_SHOP_ID, secretKey: YOOKASSA_SECRET_KEY });

const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export async function POST({ request }) {
	try {
		await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);

		const { transaction } = await request.json();

		const transactionRecord = await pb.collection('transactions').getOne(transaction);

		const paymentData = await checkout.getPayment(transactionRecord.payment);

		let url;
		if (paymentData.status === 'succeeded') {
			// generate a file token
			const fileToken = await pb.files.getToken();

			// retrieve an example protected file url (will be valid ~5min)
			const product = await pb.collection('products').getOne(transactionRecord.product);
			const notes = await pb.collection('notes').getOne(product.notes);
			url = pb.files.getUrl(notes, notes.file, { token: fileToken });
		} else {
			return json({ error: 'payment status not successful' }, { status: 500 });
		}

		return json({ url }, { status: 200 });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
