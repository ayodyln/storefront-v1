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

export type { StorefrontDetails };
