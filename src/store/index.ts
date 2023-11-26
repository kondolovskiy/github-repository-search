import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import searchSlice from './searchSclice'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
