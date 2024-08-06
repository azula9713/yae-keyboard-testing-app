<script lang="ts">
	export let key: {
		keyCode: string;
		label: string;
		shiftLabel: string;
		width: string;
		flexGrow?: boolean;
	};

	export let isShiftPressed = false;
</script>

<div class="h-16 min-w-14 {key.flexGrow ? 'flex-grow' : ''}">
	<button
		id={key.keyCode.toLowerCase()}
		class="overflow-hidden relative text-primary-300 h-16 px-1 rounded flex justify-center active:top-1 shadow align-center bg-gradient-to-b from-primary-50 to-primary-300 pt-[2px] transition-all duration-75 top-0 {key.width ===
		'full'
			? 'w-full'
			: 'w-' + (Number(key.width) + 2)}"
		on:keydown|preventDefault
		on:click|preventDefault
	>
		<div class="w-full h-14 absolute -top-[2px] flex items-center justify-between blur-sm">
			<div class="h-10 w-10 bg-primary-100 flex-shrink-0 rotate-45 -left-5 relative"></div>
			<div class="h-10 w-10 bg-primary-100 flex-shrink-0 rotate-45 -right-5 relative"></div>
		</div>
		<div
			class="relative h-11 border border-primary-100 flex-grow bg-gradient-to-b from-primary-50 to-primary-100 flex pt-1 rounded text-center"
		>
			<span class="leading-none font-semibold text-[14px] text-center w-full"
				>{isShiftPressed && key.shiftLabel !== '' ? key.shiftLabel : key.label}</span
			>
		</div>
	</button>
</div>

<style>
	.activate {
		top: 0.25rem;
		transition: all 0.75ms;
	}

	.pressed {
		background-color: brown;
		text-shadow: 0 0 0.5rem brown;
		color: white;
	}
</style>
