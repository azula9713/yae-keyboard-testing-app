<script lang="ts">
	import { Button, Input, Toast } from 'flowbite-svelte';
	import { CheckCircleOutline } from 'flowbite-svelte-icons';

	import axios from 'axios';

	let email = '';
	let isToastVisible = false;

	const subscribeToNewsletter = async () => {
		if (!email) {
			alert('Please enter your email address.');
			return;
		}

		const resp = await axios.post('/api/newsletter', {
			email
		});

		if (resp.status === 201) {
			email = '';
			isToastVisible = true;

			setTimeout(() => {
				isToastVisible = false;
			}, 3000);
		}
	};
</script>

<section>
	<div class="p-8">
		<div class="mx-auto max-w-lg text-center">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl">
				Never miss an update!
			</h2>

			<p class="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
				Sign up for our newsletter to receive updates on new features, bug fixes, and more right in
				your inbox. We promise not to spam you!
			</p>
		</div>

		<div class="mx-auto mt-8 max-w-xl">
			<div class="sm:flex sm:gap-4">
				<div class="w-full flex items-center justify-start">
					<Input
						type="email"
						id="email"
						placeholder="Enter your email address"
						class="p-3"
						required
						bind:value={email}
					/>
				</div>

				<Button
					type="button"
					class="w-full max-w-max flex items-center justify-center space-x-2"
					on:click={subscribeToNewsletter}
				>
					<span class="text-sm font-medium"> Sign Up </span>

					<svg
						class="size-5 rtl:rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</Button>
			</div>
		</div>
	</div>
	{#if isToastVisible}
		<div class="w-full flex items-center justify-center">
			<Toast
				toastStatus
				align
				on:close={() => {
					isToastVisible = false;
				}}
			>
				<CheckCircleOutline
					slot="icon"
					class="w-6 h-6 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200"
				/>
				You have successfully subscribed to our newsletter.
			</Toast>
		</div>
	{/if}
</section>
