import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SEARCH_TERM } from '../../../constants';

const initialState: ISearchState = {
  searchQuery: DEFAULT_SEARCH_TERM,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
