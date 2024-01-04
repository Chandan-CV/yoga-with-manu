<script>
	let urls = [
		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.48.27.jpeg?alt=media&token=5e4c9bd9-09ab-4fcd-873f-167c4467467f',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.48.43.jpeg?alt=media&token=d7ec77bf-193f-4f31-b826-29d2e14aac5c',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.49.01.jpeg?alt=media&token=e8193de5-d203-4c3f-a8b9-949416fc4e07',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.49.33.jpeg?alt=media&token=99c87374-e9d5-4fe5-9316-4c9fc1fa2f8a',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.49.47.jpeg?alt=media&token=1967819c-2334-47b5-af7a-397f5bb140eb',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.50.19.jpeg?alt=media&token=6a650e8b-11e6-44cd-a72f-c9901f95bf19',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.50.47.jpeg?alt=media&token=4e643dff-3b8a-438c-b8ff-5fe15052bf9f',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.51.22.jpeg?alt=media&token=b4a3dbd6-795d-4456-a2df-16d1ec938fa2',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.51.45.jpeg?alt=media&token=eab60075-713a-4d37-a047-c7530ac75386',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.52.00.jpeg?alt=media&token=5e693bc9-6b3a-45a0-b3b4-c272b9a4c6bb',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.52.13.jpeg?alt=media&token=ea1d9938-73b1-4641-9314-a6f04d790943',

		'https://firebasestorage.googleapis.com/v0/b/clone-45fa7.appspot.com/o/final%20gallery%2FWhatsApp%20Image%202024-01-02%20at%2019.52.29.jpeg?alt=media&token=fb5ee753-06e7-4ed5-a4a8-9ccaaf46bdca'
	];
</script>

<div
	class="flex flex-col justify-center items-center m-10 bg-white rounded-lg shadow-lg p-10 w-full"
>
	<p class="font-nunito text-3xl font-semibold text-dark-purple mb-10">Gallery</p>
	<div class="flex flex-row w-full overflow-x-scroll">
		{#each urls as url}
			<img src={url} class="m-5 shadow-lg w-[300px] h-[300px]" />
		{/each}
	</div>
</div>
