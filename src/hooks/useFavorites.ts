import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, updateRating } from '../store/favoritesSlice';
import { RootState } from '../store';
import { Node } from '../types';

export function useFavorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const handleAddToFavorites = (repository: Node) => {
    dispatch(addToFavorites({ ...repository, rating: 0 }));
  };

  const handleRemoveFromFavorites = (repository: Node) => {
    dispatch(removeFromFavorites(repository));
  };

  const handleUpdateRating = (repositoryId: String, newRating: number | null) => {
    dispatch(updateRating({ id: repositoryId, rating: newRating }))
  };

  return {
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleUpdateRating
  }

}