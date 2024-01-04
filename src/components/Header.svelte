<script>
import RegisterButton from "./RegisterButton.svelte";

</script>
<header class="text-gray-600 body-font sticky top-0 bg-white shadow-md z-40">
	<div
		class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
	>
		<a class="flex title-font font-medium items-center text-dark-green mb-4 md:mb-0 flex-col justify-center text-center" href="https://www.yogawithmanu.in/">
			<span class="ml-3  text-dark-green  text-3xl">Yoga with Manu</span>
			<p class="text-lg font-normal text-center m-2 text-dark-purple">3-Months Yoga Challenge</p>
		</a>
		<nav class="md:ml-auto hidden flex-wrap items-center justify-center text-lg sm:flex">
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#MeetYourInstructor">Mentor</a>
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#curriculum">Curriculum</a>
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#benefits">Benefits</a>
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#testimonials">Testimonials</a>
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#clients">Our Clients</a>
			<a class="mr-5 hover:text-gray-900 cursor-pointer" href="#faq">FAQ</a>
		  </nav>
		  <div class="sm:mr-8">
			  <RegisterButton pb={null}/>
			</div>
	</div>
</header>
