<script>
	import InfoBoxes from './InfoBoxes.svelte';
	import RegisterButton from './RegisterButton.svelte';
</script>

<body>
	<div class="bg-[#F5E3FF] p-20">
		<div class="flex flex-col sm:flex-row w-full justify-between items-center sm:pr-28 sm:pl-28">
			<div class="mb-20">
				<div class="mb-32">
					<div
						class="text-4xl sm:text-6xl text-dark-purple font-nunito leading-normal font-semibold"
					>
						<p>3-MONTHS</p>
						<p>YOGA CHALLENGE</p>
					</div>
					<div>
						<p class="text-xl text-dark-green font-nunito font-normal">OFFLINE & ONLINE</p>
					</div>
				</div>
				<div>
					<RegisterButton />
					<p class="text-xl text-dark-green font-nunito font-light mt-2">
						Yoga for body, mind & spirit
					</p>
				</div>
			</div>
			<div>
				<iframe
					class="shadow-xl rounded-2xl"
					width="320"
					height="560"
					src="https://www.youtube.com/embed/m49rB2JRUc8"
					title="Yoga with Manu presents 3 months Yoga challenge 2024. #yogawithmanu @manuchidananda4473"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="flex flex-row flex-wrap w-full justify-evenly mt-32">
			<InfoBoxes img="solar:ticket-sale-linear" subtext="" text="Free Trial Class" />
			<InfoBoxes img="mdi:calendar" subtext="Start date" text="Feb 5, 2024" />
			<InfoBoxes img="mdi-light:clock" subtext="Timing" text="Morning and Evening" />
			<a href="https://maps.app.goo.gl/mPDzRPD7uYqpxYux9">
				<InfoBoxes img="bx:map" subtext="Location" text="RMV, Bangalore" />
			</a>
			<InfoBoxes img="simple-icons:levelsdotfyi" subtext="Level" text="Beginners and Advanced" />
		</div>
	</div>
</body>
