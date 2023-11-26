import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  isTyping: false,
  afterCursor: null,
}

const searchSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setAfterCursor: (state, action: PayloadAction<any>) => {
      state.afterCursor = action.payload;
    }
  },
});

export const { setSearchQuery, setIsTyping, setAfterCursor } = searchSlice.actions;

export default searchSlice.reducer;
