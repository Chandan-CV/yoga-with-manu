<script>
	import meetyourinstructor from '../lib/images/meetyourinstructor.png';

	import Ayush from '../lib/images/certifications/Ayush.jpeg';
	import Kaivalyadhama from '../lib/images/certifications/Kaivalyadhama.jpeg';
	import Svyasa from '../lib/images/certifications/Svyasa.jpeg';
	import Icon from '@iconify/svelte';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20">
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">Meet Your Instructor</p>
	<img src={meetyourinstructor} class="shadow-lg" />
	<p class="text-dark-purple font-bold text-3xl font-nunito mb-20">Manu Chidananda</p>

	<p class="text-dark-purple text-3xl font-nunito mb-3">Certified from</p>
	<div class="flex flex-row flex-wrap justify-center">
		<img src={Ayush} class="w-[300px] m-5" />
		<img src={Kaivalyadhama} class="w-[300px] m-5" />
		<img src={Svyasa} class=" w-[300px] m-5" />
	</div>
	<div class="flex flex-row justify-center items-center mt-5">
		<Icon icon="mdi:trophy" class="text-dark-purple text-5xl mr-5" />
		<p class="font-nunito text-2xl text-dark-purple">
			First Indian yoga ambassador in Malawi, Africa
		</p>
	</div>
</div>
