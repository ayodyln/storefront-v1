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
		return await sq.json();
	} catch (error) {
		return error;
	}
}