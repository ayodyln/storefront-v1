class ShopifyStoreFront {
	input: string;

	constructor(input: string = '') {
		this.input = input;
	}

	//? Get Shopify Store Details
	async getShopifyStoreDetails(): Promise<StorefrontDetails | unknown> {
		try {
			const shopify_result = await fetch(`/api/get/shopify`, {
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
			return data.body.data.shop;
		} catch (error) {
			return error;
		}
	}
}

type StorefrontDetails = {
	name: string;
	primaryDomain: {
		host: string;
		url: string;
	};
	paymentSettings: {
		currencyCode: string;
		acceptedCardBrands: string;
		enabledPresentmentCurrencies: string;
	};
};

export { ShopifyStoreFront };

export type { StorefrontDetails };
