<script lang="ts">
	import '../style.css';
	import MobileMenu from '../components/Shell/MobileMenu.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: console.log(data);
</script>

<header></header>

<main>
	<slot />
</main>

<footer></footer>
