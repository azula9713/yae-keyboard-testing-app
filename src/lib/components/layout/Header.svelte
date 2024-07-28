<script>
	import { DarkMode, Navbar, NavBrand } from 'flowbite-svelte';
	import { GithubSolid } from 'flowbite-svelte-icons';

	import logo from '../../assets/logo.png';
</script>

<Navbar class="bg-white h-[80px]">
	<NavBrand href="/">
		<img src={logo} class="me-3 w-48 p-2" alt="Flowbite Logo" />
	</NavBrand>

	<div class="flex items-center justify-end space-x-4">
		<a
			href="https://github.com/azula9713/yae-keyboard-testing-app"
			class="btn btn-primary"
			target="_blank"
		>
			<GithubSolid class="size-5" />
		</a>
		<DarkMode />
	</div>
</Navbar>
