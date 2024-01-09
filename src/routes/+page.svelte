<script lang="ts">
	import { ShopifyStoreFront } from '$lib/shopify';
	import { onMount } from 'svelte';

	const store = new ShopifyStoreFront('');

	onMount(async () => {
		const products = await store.getShopifyStoreDetails();
		console.log(products);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
