<script>
	import { onMount } from 'svelte';
	import { environmentVariables } from '$lib/environment-variables';
	let fetcher;
	let ReactDOM;
	let React;
	let GraphiQL;
	onMount(async () => {
		ReactDOM = await window.ReactDOM;
		React = await window.React;
		GraphiQL = await window.GraphiQL;
		fetcher = await GraphiQL.createFetcher({
			url: environmentVariables.starWarsApi
		});
		ReactDOM.render(
			React.createElement(GraphiQL, {
				fetcher: fetcher,
				defaultSecondaryEditorOpen: true,
				headerEditorEnabled: true
			}),
			document.getElementById('graphiql')
		);
	});
</script>

<svelte:head>
	<link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
	<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
	<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
	<script src="https://unpkg.com/graphiql/graphiql.min.js"></script>
</svelte:head>

<body>
	<div id="graphiql">Loading...</div>
</body>

<style>
	body {
		height: 100%;
		margin: 0;
		width: 100%;
		overflow: hidden;
	}
	#graphiql {
		height: 100vh;
	}
</style>
