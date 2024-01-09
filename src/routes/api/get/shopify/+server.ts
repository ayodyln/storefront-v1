import { error, type RequestHandler } from '@sveltejs/kit';
import { SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, request }) => {
	console.log(request);
	const query = `
        query getShopDetails{
            shop {
            name
            primaryDomain{
                host
                url
            }
            paymentSettings{
                currencyCode
                acceptedCardBrands
                enabledPresentmentCurrencies
            }
            }
        }
    `;

	const variables = {};

	try {
		const result = await fetch(SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		});

		return new Response(
			JSON.stringify({
				status: result.status,
				body: await result.json()
			})
		);
	} catch (e) {
		error(500, JSON.stringify(e));
	}
};

export const POST: RequestHandler = async ({ fetch, request }) => {
	const { query, variables } = await request.json();

	try {
		const result = await fetch(SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		});

		return new Response(
			JSON.stringify({
				status: result.status,
				body: await result.json()
			})
		);
	} catch (e) {
		error(500, JSON.stringify(e));
	}
};
