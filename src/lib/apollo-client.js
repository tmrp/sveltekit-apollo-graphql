import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';

import { environmentVariables } from './environment-variables';

const link = new HttpLink({
	uri: environmentVariables.starWarsApi
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link,
	cache
});

export default apolloClient;
