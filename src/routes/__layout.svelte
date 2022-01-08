<script context="module">
	import apolloClient from '$lib/apollo-client';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ stuff }) {
		const client = apolloClient;
		return {
			stuff: {
				...stuff,
				client
			}
		};
	}
</script>

<slot />
