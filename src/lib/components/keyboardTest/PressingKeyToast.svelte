<script>
	export let pressedKey = '';
</script>

<!-- create a giant preview of the pressed key -->
<div
	class="w-max min-w-40 h-32 flex items-center justify-center bg-black dark:bg-white z-50 rounded-lg px-4"
>
	<p class="text-4xl md:text-8xl font-bold text-center uppercase text-white dark:text-black">
		{pressedKey}
	</p>
</div>
