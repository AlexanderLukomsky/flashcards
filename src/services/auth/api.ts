import { TagTypes, flashcardsApi } from '@services/common/api';
import { AuthEndpoints } from './endpoints';
import { SignInRequestData, SignUpRequestData, SignUpResponseData, User } from './types';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<User | null, void>({
      query: () => ({
        method: 'GET',
        url: AuthEndpoints.ME,
      }),

      providesTags: [TagTypes.Me],
    }),

    signIn: builder.mutation<void, SignInRequestData>({
      query: (body) => ({
        method: 'POST',
        url: AuthEndpoints.SIGN_IN,
        body,
      }),

      invalidatesTags: [TagTypes.Me],
    }),

    signUp: builder.mutation<SignUpResponseData, SignUpRequestData>({
      query: (body) => ({
        method: 'POST',
        url: AuthEndpoints.SIGN_UP,
        body,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: AuthEndpoints.LOGOUT,
      }),

      invalidatesTags: [TagTypes.Me],
    }),
  }),
});

export const { useMeQuery, useSignInMutation, useSignUpMutation, useLogoutMutation } = authApi;
