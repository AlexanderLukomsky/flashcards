import { TagTypes, flashcardsApi } from '@services/common/api';
import { AuthEndpoints } from './endpoints';
import { SignInRequestData, SignUpRequestData, SignUpResponseData, User } from './types';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<User, void>({
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
  }),
});

export const { useMeQuery, useSignInMutation, useSignUpMutation } = authApi;
