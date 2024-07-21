import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGE_NUMBER } from '../constants';

const initialState: IPageState = {
  number: DEFAULT_PAGE_NUMBER,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePages: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
});

export const { changePages } = pageSlice.actions;

export default pageSlice.reducer;
