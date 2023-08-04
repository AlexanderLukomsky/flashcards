import { configureStore } from '@reduxjs/toolkit';
import { decksSlice } from 'redux/slices/decks-slice';
import { authApi } from 'services/auth';
import { decksApi } from 'services/decks/api';

export const store = configureStore({
  reducer: {
    decks: decksSlice,
    [authApi.reducerPath]: authApi.reducer,
    [decksApi.reducerPath]: decksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, decksApi.middleware]),
});
