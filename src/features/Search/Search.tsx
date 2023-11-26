import React, { Key } from 'react';
import { List, CircularProgress, Button } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { useFavorites } from '../../hooks/useFavorites';
import { useSearch } from './hooks/useSearch';
import { useQuery } from './hooks/useQuery';
import { SearchInput } from './components/SearchInput';
import { RepositoryListItem } from '../../components/RepositoryListItem';
import { Node } from '../../types';

export const Search: React.FC = () => {
  const {
    search,
  } = useSearch();

  const { searchQuery, isTyping, afterCursor } = search;

  const {
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  } = useFavorites();

  const {
    data,
    error,
    loading,
    getRepositories,
    fetchMore
  } = useQuery();

  if (error) return <p>Error: {error.message}</p>;

  const hasNoResults = Boolean(searchQuery) && !Boolean(data?.search?.edges?.length) && !isTyping

  return (
    <div>
      <SearchInput onSearch={(value) => getRepositories({ variables: { query: value } })}/>

      {(loading && !isTyping) ? <CircularProgress /> : (
        <List>
          {hasNoResults && <h2>No results for "{searchQuery}"</h2> }
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
        <Button variant="contained" onClick={() => fetchMore(searchQuery, afterCursor)}>
          Load More
        </Button>
      )}

      

    </div>
  );
};