<script lang="ts">
	import { toggleMenu } from '@components/Layout/func';
	import { mobileMenuState } from '$lib/stores';
</script>

{#if $mobileMenuState}
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<nav aria-label="Mobile Navigation">
			<hgroup>
				<a href="/">
					<span class="sr-only">Company Name</span>
				</a>
			</hgroup>
		</nav>
	</div>
{/if}
