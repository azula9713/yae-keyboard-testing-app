<script lang="ts">
	export let statName: string;
	export let statValue: string;
</script>

<article class="flex items-center gap-4 rounded-lg border border-primary-300 bg-white p-6 w-1/4">
	<span class="px-3">
		<slot name="icon"></slot>
	</span>

	<div>
		<p class="text-2xl font-medium text-gray-900">{statValue}</p>

		<p class="text-sm text-gray-500">{statName}</p>
	</div>
</article>
