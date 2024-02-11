<script lang="ts">
	import { toggleMenu } from '@components/Layout/func';
	import { page } from '$app/stores';

	// $: console.log($page);
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<header
	role="banner"
	class="flex justify-between sticky top-0 p-4 bg-opacity-35 bg-gray-200 backdrop-blur-lg border"
>
	<nav
		role="navigation"
		aria-label="Main Navigation"
		class="flex justify-between items-center min-w-full"
	>
		<ul class="">
			<li>
				<a href="/" class="p-3 bg-black text-white rounded-lg">Home</a>
			</li>
		</ul>

		<div>
			<button
				class="bg-gray-300 hover:bg-opacity-80 min-w-11 min-h-11 flex justify-center items-center rounded"
				on:click={toggleMenu}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-black w-4">
					<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
					<path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/>
				</svg>
			</button>
		</div>
	</nav>
</header>
