<script>
	import Icon from '@iconify/svelte';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20 shadow-lg">
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">Who is this for?</p>
	<div class="flex flex-row flex-wrap justify-evenly w-full">
		<div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="material-symbols:work-outline" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Working professionals</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="solar:home-outline" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Home makers</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="ph:graduation-cap-light" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Students wanting to increase focus</p>
		</div>
		<div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="tabler:old" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Senior citizens</p>
		</div>
        <div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="solar:meditation-round-outline" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Spiritual seekers</p>
		</div>
        <div class="flex flex-col justify-center items-center w-[200px] m-5">
			<Icon icon="material-symbols-light:personal-injury-outline" class="text-dark-purple text-9xl" />
			<p class="font-nunito text-dark-green text-xl">Getting back from an injury</p>
		</div>
		
	</div>
</div>
