export type CreateAPIMethod = <TInput extends Record<string, string>, TOutput>(opts: {
	url: string;
	method: 'GET' | 'POST';
}) => (input: TInput) => Promise<TOutput>;

export type ShopifyResponse<TData, TError> = {
	success: boolean;
	data?: TData;
	errors?: TError;
};

export type ShopifyError = {
	message: string;
	locations: { line: number; column: number };
	path: string[];
	extensions: {
		code: string;
		typeName: string;
		fieldName: string;
	};
};

export type ShopifyErrorResponse = {
	errors: ShopifyError[];
};

export type ShopDetails = {
	shop: {
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
};
