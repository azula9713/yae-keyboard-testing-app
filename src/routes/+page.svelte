<script lang="ts">
	import { KeyboardOutline, LetterItalicOutline } from 'flowbite-svelte-icons';

	import ActionCard from '$lib/components/home/ActionCard.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';

	const actionsArray = [
		{
			title: 'Keyboard Test',
			icon: KeyboardOutline,
			url: '/keyboard-test',
			description:
				'Verify the functionality of every key on your keyboard with our comprehensive test.'
		},
		{
			title: 'Typing Test',
			icon: LetterItalicOutline,
			url: '/typing-test',
			description: 'Assess your typing speed and accuracy with our timed typing challenge.'
		}
	];
</script>

<div class="px-8 bg-slate-100 dark:bg-slate-950 w-full flex flex-col items-center">
	<div class="w-full p-4 max-w-[1200px]">
		<Hero />
		<section>
			<div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
				{#each actionsArray as action}
					<ActionCard title={action.title} url={action.url} description={action.description}>
						<svelte:component this={action.icon} slot="icon" class="w-12 h-auto text-primary-300" />
					</ActionCard>
				{/each}
			</div>
		</section>

		<Newsletter />
	</div>
</div>
