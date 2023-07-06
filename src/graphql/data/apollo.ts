import { ApolloClient, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URI
if (!GRAPHQL_URL) {
  throw new Error('AWS URL MISSING FROM ENVIRONMENT')
}

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  uri: GRAPHQL_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          assets: relayStylePagination(),
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})
