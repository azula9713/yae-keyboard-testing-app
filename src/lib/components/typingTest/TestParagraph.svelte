<script lang="ts">
	import { TextPlaceholder } from 'flowbite-svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';

	export let fetchedParagraph = '';
	export let refetchParagraph = () => {};
</script>

<div class="w-full flex items-end justify-between">
	{#if fetchedParagraph.length > 0}
		<p class="text-slate-400 tracking-[0.15em] font-mono text-xl sm:text-3xl md:text-4xl w-full">
			{fetchedParagraph}
		</p>
	{:else}
		<TextPlaceholder />
	{/if}

	<button
		class="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg w-[6%] flex items-center justify-center"
		on:click={refetchParagraph}
	>
		<RefreshOutline class="w-6 h-6" />
	</button>
</div>
