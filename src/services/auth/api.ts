import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthEndpoints, MeTag } from './constants';
import { SignInRequestData, User } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',

  tagTypes: [MeTag],

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' }),

  endpoints: (builder) => ({
    me: builder.query<User, void>({
      query: () => ({
        method: 'GET',
        url: AuthEndpoints.ME,
      }),

      providesTags: [MeTag],
    }),

    signIn: builder.mutation<void, SignInRequestData>({
      query: (body) => ({
        method: 'POST',
        url: AuthEndpoints.SIGN_IN,
        body,
      }),

      invalidatesTags: [MeTag],
    }),

    signUp: builder.mutation({
      query: () => ({
        method: 'POST',
        url: AuthEndpoints.SIGN_UP,
      }),
    }),
  }),
});

export const { useMeQuery, useSignInMutation } = authApi;
