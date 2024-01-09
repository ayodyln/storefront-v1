<script lang="ts">
	import { ShopifyStoreFront } from '$lib/shopify';
	import { onMount } from 'svelte';

	let storeName: string;

	const store = new ShopifyStoreFront();

	onMount(async () => {
		const s = await store.getShopifyStoreDetails();
		console.log(s);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
