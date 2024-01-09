class ShopifyStoreFront {
	input: string;

	constructor(input: string = '') {
		this.input = input;
	}

	//? Get Shopify Store Details
	async getShopifyStoreDetails() {
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
			return await shopify_result.json();
		} catch (error) {
			return error;
		}
	}
}

export { ShopifyStoreFront };
