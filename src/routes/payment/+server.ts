import PocketBase from 'pocketbase';
import { json } from '@sveltejs/kit';
import { YooCheckout, type ICreatePayment } from '@a2seven/yoo-checkout';

import { YOOKASSA_SECRET_KEY } from '$env/static/private';
import { YOOKASSA_SHOP_ID } from '$env/static/private';

import { POCKETBASE_ADMIN_EMAIL } from '$env/static/private';
import { POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';

import { PUBLIC_SITE_URL } from '$env/static/public';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

const checkout = new YooCheckout({ shopId: YOOKASSA_SHOP_ID, secretKey: YOOKASSA_SECRET_KEY });

const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export async function POST({ request }) {
	try {
		await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);

		const { user, product } = await request.json();

		const productRecord = await pb.collection('products').getOne(product);

		const idempotenceKey = crypto.randomUUID();

		const createPayload: ICreatePayment = {
			amount: {
				value: productRecord.price,
				currency: 'RUB'
			},
			payment_method_data: {
				type: 'bank_card'
			},
			confirmation: {
				type: 'redirect',
				return_url: `${PUBLIC_SITE_URL}/account`
			}
		};

		const payment = await checkout.createPayment(createPayload, idempotenceKey);

		const data = {
			payment: payment.id,
			user,
			product
		};

		await pb.collection('transactions').create(data);

		return json({ payment }, { status: 200 });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
