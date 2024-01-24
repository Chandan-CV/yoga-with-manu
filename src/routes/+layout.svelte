<script>
	import '../app.css';
	// @ts-ignore
	// @ts-ignore
	import { FacebookPixel, fb } from '@beyonk/svelte-facebook-pixel';
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

		// @ts-ignore
		!(function (f, b, e, v, n, t, s) {
			// @ts-ignore
			if (f.fbq) return;
			// @ts-ignore
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			// @ts-ignore
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		// @ts-ignore
		fbq('init', '321324809910377');
		// @ts-ignore
		fbq('track', 'PageView');
	}
</script>

<FacebookPixel />
<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RRDQW88ML4"></script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=321324809910377&ev=PageView&noscript=1"
		/></noscript
	>
</svelte:head>
<slot />
