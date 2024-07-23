<script>
	import { DarkMode, Navbar, NavBrand } from 'flowbite-svelte';

	import logo from '../assets/logo.png';
</script>

<Navbar class="bg-white">
	<NavBrand href="/">
		<img src={logo} class="me-3 w-48 p-2" alt="Flowbite Logo" />
	</NavBrand>
	<!-- <NavHamburger menuClass="text-pink-600" />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl> -->
	<DarkMode />
</Navbar>
