<script lang="ts">
	import { onMount } from 'svelte';

	import HeroImage from '../../assets/hero.png';

	let phrase = "Let's test your Keyboard, shall we?"; // text to be typed
	let typedChar = ''; // SECTION displaying typed text
	let index = 0;
	let typewriter: number; // for setInterval/clearInterval

	// If Input is empty, clear out SECTION displaying typed text
	$: if (!phrase) {
		typedChar = '';
		index = typedChar.length;
	}

	// Disable START button; prevent clicking twice
	let isTyping = false;

	// AUDIO SFX
	// const typingSFX = [
	// 	'https://assets.codepen.io/504854/type_1.mp3',
	// 	'https://assets.codepen.io/504854/type_2.mp3',
	// 	'https://assets.codepen.io/504854/type_3.mp3'
	// ];

	// const playSFX = () => {
	// 	console.log('playSFX');
	// 	let random = Math.floor(Math.random() * typingSFX.length);
	// 	let url = typingSFX[random];
	// 	let keySFX = new Audio(url);

	// 	keySFX.play();
	// 	keySFX.volume = Math.random();
	// };

	const typeChar = () => {
		if (index < phrase.length) {
			isTyping = true;
			typedChar += phrase[index];
			// playSFX();
			index += 1;
		} else {
			stopTyping();
			return;
		}
	};

	const typing = () => (typewriter = setInterval(typeChar, 30));

	const stopTyping = () => {
		clearInterval(typewriter);
		isTyping = false;
	};

	//start typing on load
	onMount(() => {
		typing();
	});
</script>

<section>
	<div class="w-full flex items-center justify-between">
		<div class="w-1/2">
			<form on:submit|preventDefault={typing}>
				<h2
					class="text-6xl font-bold text-gray-800 dark:text-gray-200 font-mono w-full leading-tight tracking-tighter"
				>
					{typedChar}
				</h2>
			</form>
			{#if !isTyping}
				<p
					class="text-2xl font-bold text-gray-800 dark:text-gray-200 font-mono w-full leading-tight tracking-tighter mt-12"
				>
					Choose from the following options:
				</p>
			{/if}
		</div>
		<!-- <div>Hero Image</div> -->
		<div class="w-1/2">
			<img src={HeroImage} alt="Hero Image" class="w-full" />
		</div>
	</div>
</section>
