<script lang="ts">
	import ActionCard from '$lib/components/home/ActionCard.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';

	import keyTestImage from '../lib/assets/keyboard.png';
	import typingTestImage from '../lib/assets/keyTest.png';

	const actionsArray = [
		{
			title: 'Keyboard Test',
			image: keyTestImage,
			url: '/keyboard-test',
			description:
				'Verify the functionality of every key on your keyboard with our comprehensive test.'
		},
		{
			title: 'Typing Test',
			image: typingTestImage,
			url: '/typing-test',
			description: 'Assess your typing speed and accuracy with our timed typing challenge.'
		}
	];
</script>

<div class="p-8 bg-slate-100 dark:bg-slate-950 w-full flex flex-col items-center">
	<div class="w-full p-4 max-w-[1200px]">
		<Hero />
		<section>
			<div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
				{#each actionsArray as action}
					<ActionCard
						title={action.title}
						image={action.image}
						url={action.url}
						description={action.description}
					/>
				{/each}
			</div>
		</section>

		<Newsletter />
	</div>
</div>
