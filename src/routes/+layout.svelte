<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
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
