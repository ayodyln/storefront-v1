<script lang="ts">
	import '@/style.css';
	import { mobileMenuState } from '$lib/stores';
	import { MobileMenu, Footer, Navigation } from '@components/Layout';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: console.log(data);
</script>

<!-- 

<main class="border-4 border-green-500 flex-1">
	<slot />
</main>

<footer class="border-4 border-blue-500 min-w-full">
	<p>Test Footer</p>
</footer> -->

<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->

<MobileMenu />
<Navigation />
<main id="Content">
	<slot />
</main>
<Footer />
