<script lang="ts">
	export let img: string;
	export let subtext: string;
	export let text: string;
	import Icon from '@iconify/svelte';
</script>

<div
	class="flex flex-col p-5 rounded-lg bg-white w-[210px] justify-center items-center m-5 text-center shadow-lg h-44"
>
	<Icon icon={img} class="text-dark-purple text-5xl" />
	<p class="font-light text-dark-green">{subtext}</p>
	<p class="font-semibold mt-2 text-dark-green text-lg">{text}</p>
</div>
