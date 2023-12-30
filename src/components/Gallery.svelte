<script>
	let urls = [
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2010.52.48%20(1).jpeg?alt=media&token=e8ff00d2-0310-492f-b68b-439abc8cffe8',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2010.52.48.jpeg?alt=media&token=433685ac-eb40-48ec-bba1-78a05352282b',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2010.52.50.jpeg?alt=media&token=3410d594-526d-4b20-bdd2-c569c45bebde',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2010.52.51.jpeg?alt=media&token=a0d9d97f-e89e-498c-ad71-47dae675d9fa',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2012.16.10.jpeg?alt=media&token=ca643fc9-8140-4920-9dc5-d634c325959c',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2012.16.11.jpeg?alt=media&token=137bdc62-90c2-4680-8638-5ee55ca0e0dc',
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/WhatsApp%20Image%202023-12-29%20at%2012.16.55%20(1).jpeg?alt=media&token=1f1c8055-109e-444d-9c8a-3b9699c7bdf5'
	];
</script>



<div class="flex flex-col justify-center items-center m-10 bg-white rounded-lg shadow-lg p-10">
<p class="font-nunito text-3xl font-semibold text-dark-purple mb-10">Gallery</p>
    <div class="flex flex-row  overflow-x-scroll">
        {#each urls as url}
        <img src={url} class=" w-[400px] m-5 shadow-lg" />
        {/each}
    </div>
</div>