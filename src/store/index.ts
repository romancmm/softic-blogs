import { configureStore } from '@reduxjs/toolkit'
import { jsonPlaceholderApi } from './apiSlices'
import postsReducer from './postsSlice'

export const store: any = configureStore({
 reducer: {
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  posts: postsReducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
