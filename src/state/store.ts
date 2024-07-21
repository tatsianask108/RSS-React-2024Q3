import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import { DEFAULT_PAGE_NUMBER } from '../constants';
export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
  preloadedState: {
    page: {
      number: parseInt(new URL(window.location.href).searchParams.get('page') || String(DEFAULT_PAGE_NUMBER), 10),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
