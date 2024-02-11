import { SHOPIFY_API_ENDPOINT } from '$env/static/private';
import type { ShopifyResponse, ShopDetails } from '@/types';
import { shopifyAPIMethod } from '@/utils/Shopify';
import { error, type RequestHandler } from '@sveltejs/kit';

/**
 *~ You can reuse this function as many times as you
 *~like to create all your API methods!
 */

const getShop = shopifyAPIMethod<
	{ query: string; variables: string },
	ShopifyResponse<ShopDetails>
>({
	method: 'POST',
	url: SHOPIFY_API_ENDPOINT
});

export const GET: RequestHandler = async () => {
	const response = await getShop({
		query: `
				query getShopDetails{
					shop {
						name
						primaryDomain{
							host
							url
						}
						paymentSettings{
							currencyCode
							accdeptedCardBrands
							enabledPresentmentCurrencies
						}
					}
				}
			`,
		variables: ''
	});

	console.log(response);

	if (response.errors) {
		return new Response(
			JSON.stringify({
				status: 404,
				errors: response.errors
			})
		);
	}

	return new Response(
		JSON.stringify({
			status: 200,
			storefront: response
		})
	);
};

// export const GET: RequestHandler = async () => {
// 	const storefront = await fetchShopify({
// 		query: `
// 			query getShopDetails{
// 				shop {
// 					name
// 					primaryDomain{
// 						host
// 						url
// 					}
// 					paymentSettings{
// 						currencyCode
// 						acceptedCardBrands
// 						enabledPresentmentCurrencies
// 					}
// 				}
// 			}
// 		`,
// 		variables: ''
// 	});
// 	console.log(storefront);

// 	return new Response(
// 		JSON.stringify({
// 			status: 200,
// 			storefront
// 		})
// 	);
// };

// export const POST: RequestHandler = async ({ request }) => {
// 	const { query, variables } = await request.json();
// 	const storefront = await fetchShopify({ query, variables });
// 	return new Response(
// 		JSON.stringify({
// 			status: 200,
// 			storefront
// 		})
// 	);
// };
