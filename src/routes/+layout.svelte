<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Yae Key Test</title>
</svelte:head>

<div class="flex items-center justify-start flex-col w-full">
	<Header />
	<div
		class="px-8 bg-slate-100 dark:bg-slate-950 w-full flex flex-col items-center min-h-[calc(100vh-160px)]"
	>
		<slot />
	</div>
	<Footer />
</div>
