import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DecksEndpoints } from './constants';
import { DecksRequestParams, DecksResponse } from './types';

export const decksApi = createApi({
  reducerPath: 'decksApi',

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' }),

  endpoints: (builder) => ({
    getDecks: builder.query<DecksResponse, DecksRequestParams>({
      query: (params) => ({
        method: 'GET',
        url: DecksEndpoints.GET_DECKS,
        params,
      }),
    }),
  }),
});

export const { useGetDecksQuery } = decksApi;
