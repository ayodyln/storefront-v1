<aside class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
	<!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
	<div class="fixed inset-0 bg-black bg-opacity-25"></div>

	<div class="fixed inset-0 z-40 flex">
		<!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
		<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
			<div class="flex px-4 pb-2 pt-5">
				<button
					type="button"
					class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Links -->
			<div class="mt-2">
				<div class="border-b border-gray-200">
					<div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
						<!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" -->
						<button
							id="tabs-1-tab-1"
							class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button">Women</button
						>
						<!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" -->
						<button
							id="tabs-1-tab-2"
							class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
							aria-controls="tabs-1-panel-2"
							role="tab"
							type="button">Men</button
						>
					</div>
				</div>

				<!-- 'Women' tab panel, show/hide based on tab state. -->
				<div
					id="tabs-1-panel-1"
					class="space-y-12 px-4 py-6"
					aria-labelledby="tabs-1-tab-1"
					role="tabpanel"
					tabindex="0"
				>
					<div class="grid grid-cols-2 gap-x-4 gap-y-10">
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
									alt="Models sitting back to back, wearing Basic Tee in black and bone."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								New Arrivals
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
									alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Basic Tees
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg"
									alt="Model wearing minimalist watch with black wristband and white watch face."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Accessories
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg"
									alt="Model opening tan leather long wallet with credit card pockets and cash pouch."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Carry
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
					</div>
				</div>
				<!-- 'Men' tab panel, show/hide based on tab state. -->
				<div
					id="tabs-1-panel-2"
					class="space-y-12 px-4 py-6"
					aria-labelledby="tabs-1-tab-2"
					role="tabpanel"
					tabindex="0"
				>
					<div class="grid grid-cols-2 gap-x-4 gap-y-10">
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
									alt="Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								New Arrivals
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
									alt="Model wearing light heather gray t-shirt."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Basic Tees
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg"
									alt="Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Accessories
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
						<div class="group relative">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg"
									alt="Model putting folded cash into slim card holder olive leather wallet with hand stitching."
									class="object-cover object-center"
								/>
							</div>
							<a href="#" class="mt-6 block text-sm font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true"></span>
								Carry
							</a>
							<p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
						</div>
					</div>
				</div>
			</div>

			<div class="space-y-6 border-t border-gray-200 px-4 py-6">
				<div class="flow-root">
					<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
				</div>
				<div class="flow-root">
					<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
				</div>
			</div>

			<div class="space-y-6 border-t border-gray-200 px-4 py-6">
				<div class="flow-root">
					<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
				</div>
				<div class="flow-root">
					<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
				</div>
			</div>

			<div class="space-y-6 border-t border-gray-200 px-4 py-6">
				<!-- Currency selector -->
				<form>
					<div class="inline-block">
						<label for="mobile-currency" class="sr-only">Currency</label>
						<div
							class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
						>
							<select
								id="mobile-currency"
								name="currency"
								class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
							>
								<option>CAD</option>
								<option>USD</option>
								<option>AUD</option>
								<option>EUR</option>
								<option>GBP</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
								<svg
									class="h-5 w-5 text-gray-500"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</aside>