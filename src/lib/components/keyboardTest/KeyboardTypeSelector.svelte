<script lang="ts">
	import macLogo from '../../assets/mac.png';
	import windowsLogo from '../../assets/windows.png';

	export let keyboardType: String;
	export let keyboardTypes: String[];
</script>

<div
	class="inline-flex rounded-lg border border-gray-100 bg-gray-200 p-1 mt-8 dark:border-gray-700 dark:bg-gray-700"
>
	{#each keyboardTypes as type}
		<button
			class={`rounded-lg px-4 py-2 mx-1 dark:text-white transition-all duration-75 ease-in ${keyboardType === type ? 'bg-primary-200 dark:bg-gray-500 text-white' : ''}`}
			on:click={() => {
				$: keyboardType = type;
			}}
		>
			{#if type === 'Windows'}
				<img
					src={windowsLogo}
					alt="Windows Logo"
					class="w-6 h-6 inline-block dark:invert-[1] dark:brightness-0"
				/>
			{:else if type === 'Mac'}
				<img
					src={macLogo}
					alt="Mac Logo"
					class="w-6 h-6 inline-block dark:invert-[1] dark:brightness-0"
				/>
			{/if}
		</button>
	{/each}
</div>
