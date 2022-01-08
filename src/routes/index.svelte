<script context="module">
	export async function load({ stuff }) {
		return {
			props: {
				movies: await stuff.client.query({
					query: gql`
						query {
							allFilms {
								films {
									id
									title
									director
									releaseDate
								}
							}
						}
					`
				})
			}
		};
	}
</script>

<script>
	import gql from 'graphql-tag';

	export let movies;
</script>

<div class="page">
	<h1>Star Wars films</h1>
	<section class="movies">
		<ul class="movie-grid">
			{#each movies.data.allFilms.films as movie (movie.id)}
				<li>
					<article>
						<h3>{movie.title}</h3>
						<p>Directed by: {movie.director}</p>
						<span>Release date: {movie.releaseDate}</span>
					</article>
				</li>
			{:else}
				<p>no movies...</p>
			{/each}
		</ul>
	</section>

	<a href="/graphiql">go to GraphQL IDE</a>
</div>

<style>
	.page {
		padding: 1em;
		max-width: 768px;
		margin: 0 auto;
	}

	.movies {
		margin-bottom: 2rem;
	}

	.movie-grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 2rem;
	}
</style>
