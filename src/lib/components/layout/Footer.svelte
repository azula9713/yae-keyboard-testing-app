<script>
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';

	import logo from '../../assets/logo.png';
</script>

<Footer footerType="logo" class="w-full rounded-none bg-white dark:bg-slate-900 h-[80px]">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" src={logo} alt="Flowbite Logo" />
		<FooterCopyright href="https://yaepublishinghouse.online" by="Yae Publishing House." />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-500 dark:text-gray-400"
		>
			<FooterLink href="/about">About</FooterLink>
			<FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
			<FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
		</FooterLinkGroup>
	</div>
</Footer>
