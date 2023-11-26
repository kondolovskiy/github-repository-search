import { useLazyQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../schemas/searchRepository.schema';

export function useQuery() {
  const [getRepositories, { loading, error, data, fetchMore }] = useLazyQuery(SEARCH_REPOSITORIES);

  const handleLoadMore = (searchQuery: string, afterCursor: string | null) => {
    fetchMore({
      variables: { query: searchQuery, after: afterCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.search.edges;
        const pageInfo = fetchMoreResult.search.pageInfo;

        return newEdges.length
          ? {
            search: {
              __typename: prevResult.search.__typename,
              edges: [...prevResult.search.edges, ...newEdges],
              pageInfo,
            },
          }
          : prevResult;
      },
    });
  };

  return {
    data,
    error,
    loading,
    getRepositories,
    fetchMore: handleLoadMore
  }
}