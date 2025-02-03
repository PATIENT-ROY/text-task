// src/entities/post/api/postApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page = 1, search = '' }) =>
        `/posts?_limit=10&_page=${page}&q=${search}`,
    }),
  }),
});

export const { useGetPostsQuery } = Api;