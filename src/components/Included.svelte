<script>
	import meetyourinstructor from '../lib/images/meetyourinstructor.png';

	import Lectures from '../lib/images/included/Lectures.svg';
	import Education from '../lib/images/included/Education.svg';
	import Nutrition from '../lib/images/included/Nutrition.svg';
	import Recorded from '../lib/images/included/Recorded.svg';
	import Icon from '@iconify/svelte';
	import med from '../lib/images/included/med.svg';
	import standing from '../lib/images/included/standing.svg';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20 shadow-lg">
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">
		What's Included in the Yoga Challenge?
	</p>
	<div class="flex flex-row w-full justify-evenly flex-wrap items-center">
		<div class="max-w-48 m-5 flex flex-col justify-center items-center">
			<img src={standing} class="mb-2 h-40" />
			<p class="text-dark-purple font-bold text-xl font-nunito">60-min Yoga sessions</p>
		</div>
		<div class="max-w-48 m-5 flex justify-center items-center flex-col">
			<!-- <Icon icon="healthicons:exercise-yoga-outline" class="text-dark-purple text-9xl " /> -->

			<img src={med} class="mb-2" />
			<p class="text-dark-purple font-bold text-xl font-nunito">Yogic lifestyle tips</p>
		</div>
		<div class="max-w-48 m-5">
			<img src={Nutrition} class="mb-2" />
			<p class="text-dark-purple font-bold text-xl font-nunito">Diet plan and nutrition</p>
		</div>
		<div class="max-w-48 m-5">
			<img src={Recorded} class="mb-2" />
			<p class="text-dark-purple font-bold text-xl font-nunito">Recorded videos</p>
		</div>
	</div>
</div>
