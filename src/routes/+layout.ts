import { ShopifyStoreFront } from '$lib/shopify';
import type { LayoutLoad } from './$types';

const store = new ShopifyStoreFront();

export const load: LayoutLoad = async () => {
	const storefront = await store.getShopifyStoreDetails();

	return {
		storefront,
		sections: [
			{ slug: 'profile', title: 'Profile' },
			{ slug: 'notifications', title: 'Notifications' }
		]
	};
};

// let storeName: string;

// const store = new ShopifyStoreFront();

// onMount(async () => {
// 	const s = await store.getShopifyStoreDetails();
// 	console.log(s);
// });
