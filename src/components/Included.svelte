<script>
	import meetyourinstructor from '../lib/images/meetyourinstructor.png';

	import Lectures from '../lib/images/included/Lectures.svg';
	import Education from '../lib/images/included/Education.svg';
	import Nutrition from '../lib/images/included/Nutrition.svg';
	import Recorded from '../lib/images/included/Recorded.svg';
	import Icon from '@iconify/svelte';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20">
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">
		What's included in the course?
	</p>
	<div class="flex flex-row w-full justify-evenly flex-wrap items-center">
		<div class="max-w-48 m-5">
			<img src={Lectures} class="shadow-lg" />
			<p class="text-dark-purple font-bold text-xl font-nunito ">60-min lectures</p>
		</div>
		<div class="max-w-48 m-5">
			<img src={Education} class="shadow-lg" />
			<p class="text-dark-purple font-bold text-xl font-nunito ">Yogic tips</p>
		</div>
		<div class="max-w-48 m-5">
			<img src={Nutrition} class="shadow-lg" />
			<p class="text-dark-purple font-bold text-xl font-nunito ">Diet plan and nutrition</p>
		</div>
		<div class="max-w-48 m-5">
			<img src={Recorded} class="shadow-lg" />
			<p class="text-dark-purple font-bold text-xl font-nunito ">
				Recorded videos of every session
			</p>
		</div>
	</div>

	
</div>
