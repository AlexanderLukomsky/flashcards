import { createApi } from '@reduxjs/toolkit/query/react';
import { TagTypes } from './constants';
import { reAuthBaseQuery } from '../re-auth-base-query/re-auth-base-query';

export const flashcardsApi = createApi({
  reducerPath: 'flashcardsApi',
  baseQuery: reAuthBaseQuery,
  endpoints: () => ({}),
  tagTypes: [TagTypes.Me],
});

// fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' }),
