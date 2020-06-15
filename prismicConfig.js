import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

export const prismicConfig = {
  baseUrl: 'https://anjo.cdn.prismic.io/api/v2'
}

export const apollo = new ApolloClient({
  link: PrismicLink({
    uri: 'https://anjo.prismic.io/graphql'
  }),
  cache: new InMemoryCache()
})
