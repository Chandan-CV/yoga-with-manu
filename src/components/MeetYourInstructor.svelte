<script>
	import meetyourinstructor from '../lib/images/meetyourinstructor.png';

	import Ayush from '../lib/images/certifications/Ayush.jpeg';
	import Kaivalyadhama from '../lib/images/certifications/Kaivalyadhama.jpg';
	import Svyasa from '../lib/images/certifications/Svyasa.png';
	import Icon from '@iconify/svelte';
	import IndiaMalawi from '../lib/images/IndiaMalawi.png';
</script>

<div class="w-5/6 flex flex-col items-center p-10 bg-white rounded-lg text-center mb-20 shadow-xl">
	<p class="text-dark-purple font-bold text-4xl font-nunito mb-20">Meet Your Teacher / Mentor</p>
	<img src={meetyourinstructor} class="shadow-lg rounded-2xl" />
	<p class="text-dark-purple font-bold text-3xl font-nunito mb-15 mt-5">Shri. Manu Chidananda</p>

	<div class="flex flex-col sm:flex-row  justify-center items-center ">
		<!-- <Icon icon="mdi:trophy" class="text-dark-purple text-5xl mr-5" /> -->
		<img src={IndiaMalawi} class="h-20 m-3"/>
		<p class="font-nunito text-3xl text-dark-purple font-semibold">
			1<sup>st</sup> Yoga Ambassador to Malawi, Africa by Govt. of India
		</p>
	</div>
	<p class="text-dark-purple text-3xl font-nunito mb-3 font-bold mt-10">Certified By</p>
	<div class="flex flex-row flex-wrap justify-center">
		<img src={Ayush} class="w-[300px] m-5 mt-[-5px]" />
		<img src={Kaivalyadhama} class="w-[360px] m-5 mt-[-5px]" />
		<img src={Svyasa} class=" w-[300px] m-5 mt-[-5px]" />
	</div>
</div>
