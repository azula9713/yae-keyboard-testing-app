<script lang="ts">
	import { TextPlaceholder } from 'flowbite-svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';

	export let fetchedParagraph = '';
	export let userText = '';
	export let refetchParagraph = () => {};

	//highlight the letters in the paragraph that match the user's input
	const highlightText = (text: string, userText: string) => {
		const textArray = text.split('');
		const userArray = userText.split('');

		return textArray.map((letter, index) => {
			if (userArray[index] === letter) {
				return `<span class="text-green-500">${letter}</span>`;
			} else {
				return `<span class="text-red-500">${letter}</span>`;
			}
		});
	};
</script>

<div class="w-full flex items-end justify-between">
	{#if fetchedParagraph.length > 0}
		<p class="text-slate-400 tracking-[0.15em] font-mono text-xl sm:text-3xl md:text-4xl w-full">
			<!-- {fetchedParagraph} -->

			{@html highlightText(fetchedParagraph, userText).join('')}
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
