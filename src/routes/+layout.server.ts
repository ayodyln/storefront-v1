import { error } from '@sveltejs/kit';

export const load = async ({ fetch, locals }) => {
	const shopify_result = await fetch(`/api/shopify/shop`);
	const data = await shopify_result.json();

	if (data.message) {
		error(404, data);
	}

	return {
		...data,
		user: locals.user
	};
};
