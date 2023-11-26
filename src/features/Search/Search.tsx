import React, { Key } from 'react';
import { useLazyQuery } from '@apollo/client';
import { List, CircularProgress, Button } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { SEARCH_REPOSITORIES } from './schemas/searchRepository.schema';
import { useFavorites } from '../../hooks/useFavorites';
import { useSearch } from './hooks/useSearch';
import { SearchInput } from './components/SearchInput';
import { RepositoryListItem } from '../../components/RepositoryListItem';
import { Node } from '../../types';

export const Search: React.FC = () => {
  const [getRepositories, { loading, error, data, fetchMore }] = useLazyQuery(SEARCH_REPOSITORIES);

  const {
    search,
  } = useSearch();

  const { searchQuery, isTyping, afterCursor } = search;

  const {
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  } = useFavorites();

  const handleLoadMore = () => {
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <SearchInput onSearch={(value) => getRepositories({ variables: { query: value } })}/>

      {(loading && isTyping) ? <CircularProgress /> : (
        <List>
          {data?.search?.edges?.map(({ node }: { node: Node }) => (
            <RepositoryListItem 
              key={(node.id as Key)}
              node={node}
              actions={
                favorites?.some((fav: Node) => fav.id === node.id) ? (
                  <Button onClick={() => handleRemoveFromFavorites(node)} title='Remove from favorites'>
                    <Star color="primary" />
                  </Button>
                ) : (
                  <Button onClick={() => handleAddToFavorites(node)} title='Add to favorites'>
                    <StarBorder />
                  </Button>
                )
              }
            />
          ))}
        </List>
      )}

      {data?.search?.pageInfo?.hasNextPage && (
        <Button variant="contained" onClick={handleLoadMore}>
          Load More
        </Button>
      )}

      

    </div>
  );
};