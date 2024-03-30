import { createSlice } from '@reduxjs/toolkit'
import { Post } from '@/types'

interface PostsState {
 posts: Post[]
 loading: boolean
 error: string | null
}

const initialState: PostsState = {
 posts: [],
 loading: false,
 error: null,
}

const postsSlice = createSlice({
 name: 'posts',
 initialState,
 reducers: {
  setPosts: (state, action) => {
   state.posts = action.payload
   state.loading = false
   state.error = null
  },
  setLoading: (state) => {
   state.loading = true
   state.error = null
  },
  setError: (state, action) => {
   state.loading = false
   state.error = action.payload
  },
 },
})

export const { setPosts, setLoading, setError } = postsSlice.actions

export default postsSlice.reducer
