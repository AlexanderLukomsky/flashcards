import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DecksEndpoints } from './constants';

export const decksApi = createApi({
  reducerPath: 'decksApi',

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' }),

  endpoints: (builder) => ({
    getDecks: builder.query<any, void>({
      query: () => ({
        method: 'GET',
        url: DecksEndpoints.GET_DECKS,
      }),
    }),
  }),
});

export const { useGetDecksQuery } = decksApi;
