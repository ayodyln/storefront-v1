import { error } from '@sveltejs/kit';
import { SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN } from '$env/static/private';

export async function fetchShopify({ query, variables }: { query: string; variables: string }) {
	try {
		const sq = await fetch(SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		});

		const response = await sq.json();

		return response;
	} catch (e) {
		error(500, JSON.stringify(e));
	}
}
