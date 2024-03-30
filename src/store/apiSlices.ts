import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post, Comment, User, Photo } from '@/types'

export const jsonPlaceholderApi = createApi({
 reducerPath: 'jsonPlaceholderApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
 endpoints: (builder) => ({
  getPosts: builder.query<Post[], void>({
   query: () => '/posts',
  }),
  getComments: builder.query<Comment[], void>({
   query: () => '/comments',
  }),
  getUsers: builder.query<User[], void>({
   query: () => '/users',
  }),
  getPhotos: builder.query<Photo[], void>({
   query: () => '/photos',
  }),
 }),
})

export const {
 useGetPostsQuery,
 useGetCommentsQuery,
 useGetUsersQuery,
 useGetPhotosQuery,
} = jsonPlaceholderApi
