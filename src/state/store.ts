import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice/pageSlice';
import searchReducer from './slices/searchSlice/searchSlice';
import { DEFAULT_PAGE_NUMBER } from '../constants';
import { swAPI } from '../services/swAPI';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    [swAPI.reducerPath]: swAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swAPI.middleware),
  preloadedState: {
    page: {
      pageNumber: parseInt(new URL(window.location.href).searchParams.get('page') || String(DEFAULT_PAGE_NUMBER), 10),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
