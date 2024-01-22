import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	try {
		const shopify_result = await fetch(`/api/shopify`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
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
								acceptedCardBrands
								enabledPresentmentCurrencies
							}
						}
					}
				`
			})
		});
		const data = await shopify_result.json();

		return { data };
	} catch (error) {
		return error;
	}
};
