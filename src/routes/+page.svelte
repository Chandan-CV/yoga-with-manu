<script>
	import Curriculum from '../components/Curriculum.svelte';
	import Header from '../components/Header.svelte';
	import Included from '../components/Included.svelte';
	import MainHero from '../components/MainHero.svelte';
	import MeetYourInstructor from '../components/MeetYourInstructor.svelte';
	import Benefits from '../components/Benefits.svelte';
	import Whofor from '../components/Whofor.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Pricing from '../components/Pricing.svelte';
	import Register from '../components/Register.svelte';
	import Footer from '../components/Footer.svelte';
	import Gallery from '../components/Gallery.svelte';
	import PreviousClients from '../components/PreviousClients.svelte';
	import Faq from '../components/FAQ.svelte';
	import Map from '../components/Map.svelte';

</script>

<body class="bg-[#FCF6FF]">
	
	<Header />
	<MainHero />
	<div class="flex flex-col justify-center items-center">
		<div class="mt-32" id="MeetYourInstructor" />
		<MeetYourInstructor />
		<div class="mt-32" id="included" />
		<Included />
		<div class="mt-32" id="curriculum" />
		<Curriculum />
		<div class="mt-32" id="benefits" />
		<Benefits />
		<div class="mt-32" id="whofor" />
		<Whofor />
		<div class="mt-32" id="clients" />
		<PreviousClients />
		<div class="mt-32" id="testimonials" />
		<Testimonials />
		<div class="mt-32" id="pricing" />
		<Pricing />
		<div class="mt-32" id="register" />
		<Register  />
		<div class="mt-32" id="faq" />
		<Faq />
		<div class="mt-32" id="gallery" />
		<Gallery />
		<div class="mt-32" id="map" />
		<Map />
		<div class="mt-32" id="footer" />
		<Footer />
	</div>
</body>
