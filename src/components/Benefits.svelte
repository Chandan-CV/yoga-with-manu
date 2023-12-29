<script>
	import Icon from '@iconify/svelte';
	import InfoBoxes from './InfoBoxes.svelte';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20 shadow-lg">
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">Benefits</p>
	<div class="flex flex-row flex-wrap justify-evenly w-full">
		<div class="flex flex-col justify-center items-center w-[200px]">
			<Icon icon="ri:mental-health-fill" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Mental health</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px]">
			<Icon icon="bi:lungs" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Lung capacity and immunity</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px]">
			<Icon icon="healthicons:weight-outline" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Weight management</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px]">
			<Icon icon="ic:baseline-sports-gymnastics" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">flexibility and strength</p>
		</div>
		
	</div>
</div>
