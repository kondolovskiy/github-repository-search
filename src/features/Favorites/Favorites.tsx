import React, { Key } from 'react';
import { List, Button, Rating } from '@mui/material';
import { Node } from '../../types';
import { useFavorites } from '../../hooks/useFavorites';
import { RepositoryListItem } from '../../components/RepositoryListItem';

export const Favorites: React.FC = () => {
  const {
    favorites,
    handleRemoveFromFavorites,
    handleUpdateRating
  } = useFavorites()


  return (
    <div>
      <h2>Favorite Repositories</h2>
      <List>
        {favorites?.map((favorite: Node) => (
          <RepositoryListItem
            key={(favorite.id as Key)}
            node={favorite}
            actions={(
              <>
                <Button onClick={() => handleRemoveFromFavorites(favorite)}>Remove from Favorites</Button>
                <Rating
                  value={favorites.find((fav: Node) => fav.id === favorite.id)?.rating || 0}
                  onChange={(event, newRating) => handleUpdateRating(favorite.id, newRating)}
                />
              </>
            )}
          />
          // <ListItem key={(favorite.id as Key)}>
          //   <ListItemText
          //     primary={`${favorite.owner.login} / ${favorite.name}`}
          //     secondary={favorite.description}
          //     sx={{ width: '50%'}}
          //   />
          //   <ListItemText
          //     primary={`Stars: ${favorite.stargazerCount}`}
          //     secondary={
          //       <Link href={favorite.url} target="_blank" rel="noopener noreferrer">
          //         View on GitHub
          //       </Link>
          //     }
          //   />
          //   
          // </ListItem>
        ))}
      </List>
    </div>
  );
}
