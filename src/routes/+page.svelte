<script>
	import Curriculum from "../components/Curriculum.svelte";
    import Header from "../components/Header.svelte";
	import Included from "../components/Included.svelte";
	import MainHero from "../components/MainHero.svelte";
    import MeetYourInstructor from "../components/MeetYourInstructor.svelte";
    import Benefits from "../components/Benefits.svelte";
	import Whofor from "../components/Whofor.svelte";
	import Testimonials from "../components/Testimonials.svelte";
	import Pricing from "../components/Pricing.svelte";
	import Register from "../components/Register.svelte";
	import Footer from "../components/Footer.svelte";
	import Gallery from "../components/Gallery.svelte";
	import PreviousClients from "../components/PreviousClients.svelte";
</script>

<body class="bg-[#FCF6FF]">
    <Header />
    <MainHero/>
    <div class="flex flex-col justify-center items-center">
        <div class="mt-32"/>
        <MeetYourInstructor/>
        <div class="mt-32"/>
        <PreviousClients/>
        <div class="mt-32"/>
        <Included/>
        <div class="mt-32"/>
        <Curriculum/>
        <div class="mt-32"/>
        <Benefits/>
        <div class="mt-32"/>
        <Whofor/>
        <div class="mt-32"/>
        <Testimonials/>
        <div class="mt-32"/>
        <Pricing/>
        <div class="mt-32"/>
        <Register/>
        <div class="mt-32"/>
        <Gallery/>
        <div class="mt-32"/>
        <Footer/>
    </div>
</body>