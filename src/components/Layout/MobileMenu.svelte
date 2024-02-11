<script lang="ts">
	import { toggleMenu } from '@components/Layout/func';
	import { mobileMenuState } from '$lib/stores';
</script>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="sm:hidden" class:hidden={$mobileMenuState} id="mobile-menu">
	<div class="space-y-1 pb-3 pt-2">
		<!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" -->
		<a
			href="/collections"
			class="border-indigo-500 bg-indigo-50 text-indigo-700 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
			aria-current="page">Collections</a
		>
	</div>
</div>
