import { gql } from '@apollo/client';

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            description
            stargazerCount
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;