import { error } from '@sveltejs/kit';

export const load = async ({ fetch, locals }) => {
	const shopify_result = await fetch(`/api/shopify/shop`);
	const data = await shopify_result.json();

	if (data.errors) {
		error(400, {
			message: 'Failed To Fetch Data'
		});
	}

	return {
		...data,
		user: locals.user
	};
};
