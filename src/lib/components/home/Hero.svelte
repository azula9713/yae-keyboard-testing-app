<script lang="ts">
	import HeroImage from '../../assets/hero.png';
</script>

<section>
	<div class="w-full flex items-center justify-between">
		<div class="w-1/2">
			<h2 class="text-6xl font-bold text-gray-800 dark:text-gray-200 w-full leading-tight">
				Let's test your Keyboard, shall we?
			</h2>
		</div>
		<div class="w-1/2 pl-24">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src={HeroImage}
				alt="Hero Image"
				class="w-[80%] h-auto"
				style="
				object-fit: cover;
				object-position: center;
			"
			/>
		</div>
	</div>
</section>
