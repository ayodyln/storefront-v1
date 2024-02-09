export const load = async ({ fetch, locals }) => {
	try {
		const shopify_result = await fetch(`/api/shopify`);
		const data = await shopify_result.json();
		return {
			...data,
			user: locals.user
		};
	} catch (error) {
		return error;
	}
};
