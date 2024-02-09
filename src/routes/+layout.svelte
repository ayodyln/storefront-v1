<script lang="ts">
	import '../style.css';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: console.log(data);
</script>

<section id="APP_SHELL" class="p-4">
	<header class="flex justify-between">
		<nav>
			<ul>
				<li>
					<div>
						{#if data.user}
							<figure class="rounded-full h-14 w-14 overflow-hidden flex">
								<img src="https://picsum.photos/200/300" alt="Home" class="w-full" />
							</figure>

							<span>{data.user}</span>
						{:else}
							<a href="/login">Login</a>
						{/if}
					</div>
				</li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer></footer>
</section>
