<script>
	import Curriculum from "../components/Curriculum.svelte";
    import Header from "../components/Header.svelte";
	import Included from "../components/Included.svelte";
	import MainHero from "../components/MainHero.svelte";
    import MeetYourInstructor from "../components/MeetYourInstructor.svelte";
</script>

<body class="bg-[#FCF6FF]">
    <Header />
    <MainHero/>
    <div class="flex flex-col justify-center items-center">
        <div class="mt-32"/>
        <MeetYourInstructor/>
        <div class="mt-32"/>
        <Included/>
        <div class="mt-32"/>
        <Curriculum/>
    </div>
</body>