<script>
	import { onMount } from 'svelte';

	import { StarOutline } from 'flowbite-svelte-icons';

	import logo from '../../lib/assets/logo.png';

	let version = '1.0.0';

	const getVersion = async () => {
		const res = await fetch(
			'https://api.github.com/repos/azula9713/yae-keyboard-testing-app/releases'
		);
		const data = await res.json();
		version = data[0].tag_name;
		console.log(version);
	};

	onMount(() => {
		document.title = 'Yae Key Test - About';
		getVersion();
	});
</script>

<div class="w-full max-w-[1200px] p-12 text-gray-800 dark:text-gray-300">
	<div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src={logo}
			alt="Hero Image"
			class="w-[80%] h-auto mx-auto"
			style="object-fit: cover; object-position: center;"
		/>

		<!-- add a version, fetch it from github -->
		<p class="text-center text-sm mt-4">
			Current Version: {version}
		</p>
	</div>
	<div class="my-8">
		<h2 class="text-4xl font-bold mb-2">About</h2>
		<p class="text-lg py-4">
			Yae Key Test is a web application that allows users to test their keyboard and typing skills.
			The app provides a comprehensive keyboard test to verify the functionality of every key on
			your keyboard. It also offers a typing test to assess your typing speed and accuracy with a
			timed typing challenge.
		</p>
	</div>
	<div class="my-8">
		<h2 class="text-4xl font-bold mb-2">Find Us on GitHub</h2>
		<p class="text-lg py-4">
			You can find the source code for Yae Key Test on GitHub. Feel free to contribute to the
			project or report any issues you encounter. We appreciate your support and feedback!
		</p>

		<!-- star us button -->
		<button
			class="bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-800 px-4 py-2 rounded-md flex items-center"
		>
			<StarOutline class="w-6 h-6 me-2 text-white" />
			<a
				href="https://github.com/azula9713/yae-keyboard-testing-app"
				target="_blank"
				class="dark:text-white text-gray-800"
			>
				Star
			</a>
		</button>
	</div>
	<div class="my-8">
		<h2 class="text-4xl font-bold mb-2">Contact Us</h2>
		<p class="text-lg py-4">
			If you have any questions or feedback about Yae Key Test, please contact us at our
			<a
				href="mailto:nilesh@yaepublishinghouse.online"
				class="text-primary-500 dark:text-primary-300">email</a
			>
			address.
			<br />
			We appreciate your support and look forward to hearing from you!
		</p>
	</div>
</div>
