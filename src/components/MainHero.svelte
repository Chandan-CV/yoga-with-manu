<script>
	import InfoBoxes from './InfoBoxes.svelte';
	import RegisterButton from './RegisterButton.svelte';
</script>

<body>
	<div class="bg-[#F5E3FF] p-20">
		<div class="flex flex-col sm:flex-row w-full justify-between items-center">
			<div class="mb-20">
				<div class="mb-32">
					<div class="text-4xl sm:text-6xl text-dark-purple font-nunito leading-normal">
						<p>3-MONTH</p>
						<p>YOGA CHALLENGE</p>
					</div>
					<div>
						<p class="text-lg text-dark-green font-nunito font-light">OFFLINE AND ONLINE</p>
					</div>
				</div>
				<div>
					<RegisterButton />
					<p class="text-lg text-dark-green font-nunito font-light mt-2">
						Register now and change your lifestyle forever
					</p>
				</div>
			</div>
			<div>

				<iframe
				width="320"
				height="560"
				src="https://www.youtube.com/embed/cgEFWVQLjB4"
				title="Yoga - 3 months Challenge- 2024"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="flex flex-row flex-wrap w-full justify-evenly mt-32">
			<InfoBoxes img="mdi:calendar" subtext="Start date" text="Jan 25, 2024"  />
			<InfoBoxes img="mdi-light:clock" subtext="Timing" text="Morning and Eventing" />
			<InfoBoxes img="mdi:map" subtext="Location" text="RMV, Bangalore" />
			<InfoBoxes img="simple-icons:levelsdotfyi" subtext="Level" text="Beginners and advanced" />	
			<InfoBoxes img="solar:ticket-sale-linear" subtext="" text="Free first class" />
		</div>
	</div>
</body>
