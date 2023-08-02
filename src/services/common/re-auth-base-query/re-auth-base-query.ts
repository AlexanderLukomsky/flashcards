import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: 'include',
});

export const reAuthBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      { url: 'v1/auth/refresh-token', method: 'POST' },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // store the new token

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(loggedOut());
    }
  }

  return result;
};
