<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Yae Key Test</title>
</svelte:head>

<div class="w-screen flex items-center justify-start flex-col h-screen">
	<Header />
	<slot />
	<Footer />
</div>
