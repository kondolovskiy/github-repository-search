import { createSlice } from '@reduxjs/toolkit';
import { Node } from '../types';

const loadFavoritesFromLocalStorage = () =>
  JSON.parse((window.localStorage.getItem('favorites') as string)) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    addToFavorites: (state, action) => {
      const updatedState = [...state, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedState));
      return updatedState;
    },
    removeFromFavorites: (state, action) => {
      const updatedState = state.filter((fav: Node) => fav.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedState));
      return updatedState;
    },
    updateRating: (state, action) => {
      const { id, rating } = action.payload;
      const favorite = state.find((fav: Node) => fav.id === id);
      if (favorite) {
        favorite.rating = rating;
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, updateRating } = favoritesSlice.actions;

export default favoritesSlice.reducer;
