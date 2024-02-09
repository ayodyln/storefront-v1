import { error, type RequestHandler } from '@sveltejs/kit';
import { fetchShopify } from '../../../utils/Shopify';

export const GET: RequestHandler = async () => {
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
	const storefront = await fetchShopify({ query, variables: '' });
	return new Response(
		JSON.stringify({
			status: 200,
			storefront
		})
	);
};

export const POST: RequestHandler = async ({ request }) => {
	const { query, variables } = await request.json();
	const storefront = await fetchShopify({ query, variables });
	return new Response(
		JSON.stringify({
			status: 200,
			storefront
		})
	);
};
