import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
})

export default client
