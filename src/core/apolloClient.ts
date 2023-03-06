import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    ServerError,
    HttpLink,
    gql,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                );
            }
            if ((networkError as ServerError)?.statusCode === 401) {
                console.log('Internal server error');
            }
        }),
        new HttpLink({ uri: `https://rickandmortyapi.com/graphql` }),
    ]),
    cache: new InMemoryCache(),
});

export default client;
