<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Yae Key Test</title>
</svelte:head>

<div class="flex items-center justify-start flex-col h-screen w-full">
	<Header />
	<slot />
	<Footer />
</div>
