import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client/core';
// import Apollo, * as ApolloScope from '@apollo/client/core/index.js';

import { environmentVariables } from './environment-variables';

// const HttpLink = Apollo?.HttpLink || ApolloScope?.HttpLink;

// const ApolloClient = Apollo?.ApolloClient || ApolloScope?.ApolloClient;

// const InMemoryCache = Apollo?.InMemoryCache || ApolloScope?.InMemoryCache;

const link = new HttpLink({
	uri: environmentVariables.starWarsApi
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link,
	cache
});

export default apolloClient;
