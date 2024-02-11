import { SHOPIFY_STOREFONT_API_TOKEN } from '$env/static/private';
import type { CreateAPIMethod } from '@/types';
import { error } from '@sveltejs/kit';

export const get = async (url: string, input: Record<string, string>) => {
	return fetch(`${url}?${new URLSearchParams(input).toString()}`);
};

export const post = async (url: string, input: Record<string, string>) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFONT_API_TOKEN
		},
		body: JSON.stringify(input)
	});
};

export const shopifyAPIMethod: CreateAPIMethod = (opts) => (input) => {
	const method = opts.method === 'GET' ? get : post;
	return method(opts.url, input)
		.then((res) => {
			if (!res.ok)
				error(500, {
					message: 'Failed API Call'
				});

			return res.json();
		})
		.then((data) => data);
};
