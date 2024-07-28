import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGE_NUMBER } from '../../../constants';

const initialState: IPageState = {
  pageNumber: DEFAULT_PAGE_NUMBER,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
