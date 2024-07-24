<script lang="ts">
	//required props
	export let title = '';

	export let url = '';
	export let description = '';
	//non required prop color
</script>

<div class="space-y-4">
	<a href={url} class="group relative block h-72">
		<div
			class="relative flex h-full justify-center transform items-center border-2 border-black bg-slate-200 dark:bg-slate-800 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg"
		>
			<div
				class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 flex items-center justify-center space-x-4"
			>
				<!-- <img src={image} alt={title} class="w-48 h-auto" /> -->
				<!-- flowbite icon -->

				<slot name="icon"></slot>
				<h2
					class="text-xl font-medium sm:text-xl md:text-4xl text-gray-800 dark:text-gray-100 font-mono"
				>
					{title}
				</h2>
			</div>

			<div
				class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
			>
				<h3 class="mt-4 text-xl font-medium sm:text-2xl text-gray-800 dark:text-gray-100">
					{title}
				</h3>

				<p class="mt-4 text-sm sm:text-base text-gray-800 dark:text-gray-100">
					{description}
				</p>
			</div>
		</div>
	</a>
</div>
