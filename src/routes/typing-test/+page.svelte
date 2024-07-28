<script lang="ts">
	import { Progressbar, Textarea } from 'flowbite-svelte';
	import { ClockOutline, PenNibOutline } from 'flowbite-svelte-icons';
	import moment from 'moment';
	import { onDestroy } from 'svelte';

	import StatItem from '$lib/components/typingTest/StatItem.svelte';
	import TestParagraph from '$lib/components/typingTest/TestParagraph.svelte';
	import { generateText } from '$lib/util/textGenerator.ts';

	let userText = '';
	let timeElapsed = 0;
	let accuracy = 0;
	let wpm = 0;
	let timerId: number;
	let isTypingEnabled = true;
	let progress = 0;
	let fetchedParagraph = generateText(2);

	const startTimer = () => {
		// Start the timer using moment.js
		const startTime = moment();
		timerId = setInterval(() => {
			timeElapsed = moment().diff(startTime);
		}, 100);
	};

	const stopTimer = () => {
		clearInterval(timerId);
		wpm = calculateWPM();
	};

	const calculateWPM = () => {
		// Split both userText and fetchedParagraph into arrays of words
		const userWords = userText.trim().replace(/\s+/g, ' ').split(' ');
		const originalWords = fetchedParagraph.trim().replace(/\s+/g, ' ').split(' ');

		// Count the number of accurate words
		const accurateWordsCount = userWords.reduce((count, word, index) => {
			if (word === originalWords[index]) {
				return count + 1;
			}
			return count;
		}, 0);

		// Calculate the elapsed time in minutes
		const timeInMinutes = moment.duration(timeElapsed).asMinutes();

		// Calculate WPM using the count of accurate words
		return timeInMinutes > 0 ? accurateWordsCount / timeInMinutes : 0;
	};

	const calculateAccuracy = () => {
		// Split both userText and fetchedParagraph into arrays of words
		const userWords = userText.trim().replace(/\s+/g, ' ').split(' ');
		const originalWords = fetchedParagraph.trim().replace(/\s+/g, ' ').split(' ');

		// Count the number of accurate words
		const accurateWordsCount = userWords.reduce((count, word, index) => {
			if (word === originalWords[index]) {
				return count + 1;
			}
			return count;
		}, 0);

		// Calculate the accuracy percentage
		return accurateWordsCount / originalWords.length;
	};

	const refetchParagraph = async () => {
		fetchedParagraph = generateText(2);
		userText = '';
		timeElapsed = 0;
		progress = 0;
		isTypingEnabled = true;
		stopTimer();
	};

	const getProgress = () => {
		const progress = (userText.length / fetchedParagraph.length) * 100;

		if (progress >= 100) {
			stopTimer();
			isTypingEnabled = false;
		}

		return progress;
	};

	$: if (userText) {
		progress = getProgress();
		accuracy = calculateAccuracy();
	}

	$: if (timeElapsed > 0) {
		wpm = calculateWPM();
	}

	onDestroy(() => {
		if (isTypingEnabled) {
			clearInterval(timerId);
		}
	});
</script>

<div class="w-full max-w-[1200px] p-12">
	<TestParagraph {fetchedParagraph} {refetchParagraph} {userText} />
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
			labelInsideClass="text-slate-100 text-base font-medium text-center p-1 leading-none rounded-full"
			class="my-4"
		/>
	</div>

	<div class="text-white w-full flex items-center justify-between">
		<StatItem statName="Time Elapsed" statValue={moment.utc(timeElapsed).format('mm:ss:SS')}>
			<svelte:component this={ClockOutline} slot="icon" class="w-8 h-auto text-primary-300" />
		</StatItem>
		<StatItem statName="Words Per Minute" statValue={wpm.toFixed(2)}>
			<svelte:component this={PenNibOutline} slot="icon" class="w-8 h-auto text-primary-300" />
		</StatItem>
		<StatItem statName="Accuracy" statValue={(accuracy * 100).toFixed(2) + '%'}>
			<svelte:component this={ClockOutline} slot="icon" class="w-8 h-auto text-primary-300" />
		</StatItem>
	</div>
</div>
