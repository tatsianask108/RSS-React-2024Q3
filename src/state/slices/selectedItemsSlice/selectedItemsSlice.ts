import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ISelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IPlanet>) => {
      state.selectedItems.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.selectedItems.splice(action.payload, 1);
    },
    deleteAllItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
