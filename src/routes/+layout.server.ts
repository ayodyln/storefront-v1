import { error } from '@sveltejs/kit';

export const load = async ({ fetch, locals }) => {
	const shopify_result = await fetch(`/api/shopify/shop`);
	const data = await shopify_result.json();
	console.log(data);

	if (data.errors) {
		error(400, JSON.stringify(data.errors));
	}

	return {
		...data,
		user: locals.user
	};
};
