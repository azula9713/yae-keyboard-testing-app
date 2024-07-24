<script lang="ts">
	import TestParagraph from '$lib/components/typingTest/TestParagraph.svelte';
	import { generateText } from '$lib/util/textGenerator.js';
	import { Progressbar, Textarea } from 'flowbite-svelte';
	import { onDestroy } from 'svelte';

	let userText = '';
	let timeElapsed = 0;
	let timerId: number;
	let isTypingEnabled = true;
	let progress = 0;
	//remove double quotes from fetched paragraph at start and end
	// let fetchedParagraph = JSON.stringify(data.props.data, null, 2).replace(/\"/g, '');
	let fetchedParagraph = generateText(2);

	const startTimer = () => {
		timerId = setInterval(() => {
			timeElapsed += 1;
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(timerId);
	};

	const refetchParagraph = async () => {
		// fetchedParagraph = await fetchParagraph();
		fetchedParagraph = generateText(2);
		userText = '';
		timeElapsed = 0;
		progress = 0;
		startTimer();
		isTypingEnabled = true;
	};

	const getProgress = () => {
		const progress = (userText.length / fetchedParagraph.length) * 100;

		//if progress is 100, stop timer. This is to prevent timer from running after user has finished typing. disable typing. and make sure progress does not exceed 100
		if (progress >= 100) {
			stopTimer();
			isTypingEnabled = false;
		}

		return progress;
	};

	onDestroy(() => {
		if (isTypingEnabled) {
			clearInterval(timerId);
		}
	});
</script>

<div class="p-8 bg-slate-100 dark:bg-slate-950 w-full flex flex-col items-center">
	<div class="w-full max-w-[1200px] p-12">
		<TestParagraph {fetchedParagraph} {refetchParagraph} />

		<div class="my-8">
			<Textarea
				id="textarea-id"
				placeholder="Start typing..."
				rows="6"
				name="typetest"
				disabled={!isTypingEnabled}
				class="placeholder:text-xl placeholder:font-mono my-4"
				unWrappedClass="text-xl font-mono p-2.5 focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
				bind:value={userText}
				on:input={() => {
					//if userText is empty, reset timeElapsed, else start timer
					if (userText.length === 1) {
						timeElapsed = 0;
						startTimer();
					}

					progress = getProgress();
				}}
				on:paste={(e) => {
					e.preventDefault();
				}}
				on:select={(e) => {
					e.preventDefault();
				}}
			/>
			<Progressbar
				{progress}
				size="h-6"
				precision={3}
				labelInside
				animate
				color="primary"
				labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
				class="my-4"
			/>
		</div>

		<div class="text-white w-full">
			Timer: {timeElapsed}
		</div>
	</div>
</div>
