<script lang="ts">
	import { onMount } from 'svelte';

	import Newsletter from '$lib/components/home/Newsletter.svelte';
	import KeyboardTypeSelector from '$lib/components/keyboardTest/KeyboardTypeSelector.svelte';
	import KeyButton from '$lib/components/keyboardTest/KeyButton.svelte';
	import WindowsKeyValues from '$lib/data/keyboardValues';

	let keyboardTypes = ['Windows', 'Mac'];

	let isShiftPressed = false;
	let currentKey = '';
	let pressedKeys: string[] = [];
	let keyboardType = keyboardTypes[0];

	const clearActiveKeys = () => {
		pressedKeys.forEach((key) => {
			document.getElementById(key.toLowerCase())?.classList.remove('activate');
		});
	};

	const handleKeyDown = (
		e:
			| KeyboardEvent
			| { key: string; preventDefault: () => void; location: number; stopPropagation: () => void }
	) => {
		switch (e.key.toLowerCase()) {
			case 'shift':
				// Determine whether it's left or right Shift key
				if (e.location === 1) {
					currentKey = 'shiftl';
				} else if (e.location === 2) {
					currentKey = 'shiftr';
				}

				isShiftPressed = true;
				break;

			case 'control':
				if (e.location === 1) {
					currentKey = 'ctrll';
				} else if (e.location === 2) {
					currentKey = 'ctrlr';
				}
				break;
			case 'alt':
				if (e.location === 1) {
					currentKey = 'altl';
				} else if (e.location === 2) {
					currentKey = 'altr';
				}
				break;

			case 'meta':
				if (e.location === 1) {
					currentKey = 'metal';
				} else if (e.location === 2) {
					currentKey = 'metar';
				}
				e.preventDefault();
				e.stopPropagation();
				break;
			default:
				currentKey = e.key.toLowerCase();
				break;
		}
		document.getElementById(currentKey.toLowerCase())?.classList.add('activate');
		document.getElementById(currentKey.toLowerCase())?.classList.add('pressed');
		if (!pressedKeys.includes(currentKey)) {
			const updatedKeys = [...pressedKeys, currentKey];
			pressedKeys = updatedKeys;
		}
	};

	const handleKeyUp = (
		e:
			| KeyboardEvent
			| { key: string; preventDefault: () => void; location: number; stopPropagation: () => void }
	) => {
		switch (e.key.toLowerCase()) {
			case 'shift':
				// Determine whether it's left or right Shift key
				if (e.location === 1) {
					currentKey = 'shiftl';
				} else if (e.location === 2) {
					currentKey = 'shiftr';
				}

				isShiftPressed = false;
				break;

			case 'control':
				if (e.location === 1) {
					currentKey = 'ctrll';
				} else if (e.location === 2) {
					currentKey = 'ctrlr';
				}
				break;
			case 'alt':
				if (e.location === 1) {
					currentKey = 'altl';
				} else if (e.location === 2) {
					currentKey = 'altr';
				}
				break;

			case 'meta':
				if (e.location === 1) {
					currentKey = 'metal';
				} else if (e.location === 2) {
					currentKey = 'metar';
				}
				e.preventDefault();
				e.stopPropagation();
				break;
			default:
				currentKey = e.key.toLowerCase();
				break;
		}

		document.getElementById(currentKey.toLowerCase())?.classList.remove('activate');
	};

	const disableRightClick = (e: MouseEvent) => {
		e.preventDefault();
	};

	$: pressedKeys, clearActiveKeys();
	$: keyboardType,
		() => {
			localStorage.setItem('keyboardType', keyboardType);
		};

	onMount(() => {
		const storedKeyboardType = localStorage.getItem('keyboardType');
		if (storedKeyboardType) {
			keyboardType = storedKeyboardType;
		}
		document.addEventListener('keydown', handleKeyDown, true);
		document.addEventListener('keyup', handleKeyUp, true);
		document.addEventListener('contextmenu', disableRightClick);

		return () => {
			document.removeEventListener('keydown', handleKeyDown, true);
			document.removeEventListener('keyup', handleKeyUp, true);
			document.removeEventListener('contextmenu', disableRightClick);
		};
	});
</script>

<KeyboardTypeSelector {keyboardTypes} bind:keyboardType />
{#if keyboardType === 'Windows'}
	<div class="text-primary-700 text-xs flex items-center justify-center w-full my-12">
		<div
			class="bg-primary-400 p-3 rounded-lg border-2 border-t-primary-400 border-x-primary-500 border-b-primary-700 shadow-lg"
		>
			<div class="p-1 bg-primary-400 rounded overflow-hidden">
				{#each [1, 2, 3, 4, 5, 6] as row}
					<div class="flex space-x-[4px] {row > 1 ? 'mt-[2px]' : ''}">
						{#each WindowsKeyValues.filter((key) => key.row === row.toString()) as key (key.keyCode)}
							<KeyButton {key} {isShiftPressed} />
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="w-full flex flex-col items-center justify-center text-center my-12">
		<div class="text-primary-400 dark:text-slate-200">
			<h1 class="text-4xl font-bold">This feature is coming soon</h1>
			<p class="mt-4 text-lg">We're working on something awesome!</p>
			<p class="mt-4 text-lg">Want to be the first to know when it's ready?</p>
		</div>
		<Newsletter />
	</div>
{/if}
