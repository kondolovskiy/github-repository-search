import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  searchQuery: string,
  isTyping: boolean,
  afterCursor: string | null,
}

const initialState: State = {
  searchQuery: '',
  isTyping: false,
  afterCursor: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setAfterCursor: (state, action: PayloadAction<string | null>) => {
      state.afterCursor = action.payload;
    }
  },
});

export const { setSearchQuery, setIsTyping, setAfterCursor } = searchSlice.actions;

export default searchSlice.reducer;
