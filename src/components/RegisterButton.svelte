<script>
// @ts-nocheck

	import { parse } from 'svelte/compiler';
	import { pb, uploadData } from '../pocketbase';
	export let isRegister = false;
	export let TermsAgreed = false;
	export let Name = '';
	export let WhatsappNumber = '';
	export let Email = '';
	const validateEmail = (/** @type {string} */ email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const submit = async()=>{
		const data = {
        "name": Name,
        "email": Email,
        "phone": WhatsappNumber
    };
    const record = await pb.collection('registrations').create(data);
	console.log(record);

	}
</script>

<button
	class="inline-flex items-center bg-dark-purple border-0 py-2 px-4 shadow-lg focus:outline-none hover:bg-light-purple rounded-md text-white text-xl mt-4 md:mt-0 justify-center"
	on:click={() => {
		if (!isRegister) {
			window.location.href = '#register';
		} else {
			if (!TermsAgreed) {
				alert('Please agree to the terms and conditions');
			} else if (!TermsAgreed || Name == '' || WhatsappNumber == '' || Email == '') {
				alert('Please fill all the fields');
			} else if (!validateEmail(Email)) {
				alert('Please enter a valid email');
			} else if (WhatsappNumber.length != 10) {
				alert('Please enter a valid whatsapp number');
			} else {
				submit();
				// window.location.href = 'https://chat.whatsapp.com/HyWgxcxQ8F32fEZ4ny9Xqo';
			}
		}
	}}
	>Register Now
	<svg
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		class="w-4 h-4 ml-1"
		viewBox="0 0 24 24"
	>
		<path d="M5 12h14M12 5l7 7-7 7"></path>
	</svg>
</button>
