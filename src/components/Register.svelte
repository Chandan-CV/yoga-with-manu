<script>
	import RegisterButton from './RegisterButton.svelte';
	let TermsAgreed = false;
	let email = '';
	let name = '';
	let whatsappNumber = '';
	let emailerror = false;
	let whatsappNumbererror = false;
</script>

<section class="text-gray-600 body-font w-full">
	<div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
			<figure class="max-w-screen-md mx-auto text-center">
				<svg
					class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 14"
				>
					<path
						d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
					/>
				</svg>
				<blockquote>
					<p class="text-2xl italic font-medium text-dark-purple">
						"An Ounce of practice is worth 1000 tonne of talk"
					</p>
				</blockquote>
				<figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
					<div
						class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700"
					>
						<cite class="pe-3 font-medium text-dark-purple">Swami Vivekananda</cite>
					</div>
				</figcaption>
			</figure>
		</div>
		<div
			class="lg:w-2/6 md:w-1/2 bg-white shadow-xl rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
		>
			<h2 class="text-dark-purple text-2xl font-nunito font-medium title-font mb-5">
				Register now!
			</h2>
			<div class="relative mb-4">
				<label for="full-name" class="leading-7 text-sm text-gray-600">Full Name*</label>
				<input
					type="text"
					id="full-name"
					name="full-name"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					bind:value={name}
				/>
			</div>
			<div class="relative mb-4">
				<label for="full-name" class="leading-7 text-sm text-gray-600">Whatsapp Number*</label>
				<input
					type="text"
					id="whatsapp-number"
					name="whatapp-number"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					bind:value={whatsappNumber}
				/>
			</div>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email*</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					bind:value={email}
				/>
			</div>
			<div class="mb-5">
				<input
					type="checkbox"
					id="terms-and-conditions"
					name="terms-and-conditions"
					value="terms-and-conditions"
					class="accent-dark-purple text-3xl"
					bind:checked={TermsAgreed}
				/>
				<label for="terms-and-conditions" class="text-sm text-gray-600"
					>I agree to the <a
						href="https://docs.google.com/document/d/1blTxMgTV2nPtxiPauTSrm5RSoLevzNiuycs5husFi8U/edit?usp=sharing"
						class="text-dark-purple">Terms and Conditions</a
					></label
				>
			</div>
			<RegisterButton
				isRegister
				{TermsAgreed}
				Email={email}
				Name={name}
				WhatsappNumber={whatsappNumber}
			/>
			<p class="text-xs text-gray-500 mt-3">Register now and change your lifestyle forever!</p>
		</div>
	</div>
</section>
