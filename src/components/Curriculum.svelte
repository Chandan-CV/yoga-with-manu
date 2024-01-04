<script lang="ts">
	import month1 from '../lib/images/curriculum/month1.png';
	import month2 from '../lib/images/curriculum/month2.png';
	import month3 from '../lib/images/curriculum/month3.png';
	let ref;
	let month: number = 1;
</script>

<div
	class="w-5/6 flex flex-col items-center p-5 sm:p-10 bg-white rounded-lg text-center mb-20 shadow-lg"
>
	<p class="text-dark-purple font-semibold text-3xl font-nunito mb-20">Curriculum</p>
	<div class="flex flex-row w-full justify-evenly text-2xl font-nunito text-dark-purple">
		<div
			class="cursor-pointer p-2 border-2 border-dark-purple rounded-md bg-ultra-light-purple font-semibold text-sm sm:text-2xl hover:bg-dark-purple hover:text-white"
			on:click={() => {
				month = 1;
			}}
		>
			Month 1
		</div>
		<div
			class="cursor-pointer p-2 border-2 border-dark-purple rounded-md bg-ultra-light-purple font-semibold text-sm sm:text-2xl hover:bg-dark-purple hover:text-white"
			on:click={() => {
				month = 2;
			}}
		>
			Month 2
		</div>
		<div
			class="cursor-pointer p-2 border-2 border-dark-purple rounded-md bg-ultra-light-purple font-semibold text-sm sm:text-2xl hover:bg-dark-purple hover:text-white"
			on:click={() => {
				month = 3;
			}}
		>
			Month 3
		</div>
	</div>

	<div class="mt-10">
		{#if month == 1}
			<img src={month1} />
		{/if}
		{#if month == 2}
			<img src={month2} />
		{/if}
		{#if month == 3}
			<img src={month3} />
		{/if}
	</div>
</div>
