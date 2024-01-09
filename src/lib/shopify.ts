class ShopifyStoreFront {
	input: string;

	constructor(input: string) {
		this.input = input;
	}

	async getShopifyStoreDetails() {
		try {
			const shopify_result = await fetch(`http://localhost:5173/api/get/shopify`, {
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
			const result = await shopify_result.json();
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export { ShopifyStoreFront };
