<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	if (typeof window !== 'undefined' && window) {
		// @ts-ignore
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			// @ts-ignore
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-RRDQW88ML4');
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RRDQW88ML4"></script>
</svelte:head>
<slot />
