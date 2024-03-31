import { createSlice } from '@reduxjs/toolkit'
import { Photo, Post, User, Comment } from '@/types'

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

// Helper function to merge data on IDs
export const mergeData = (
 posts: Post[],
 comments: Comment[],
 users: User[],
 photos: Photo[],
) => {
 return posts.map((post) => ({
  ...post,
  numberOfComments: comments.filter((comment) => comment.postId === post.id)
   ?.length,
  user: users.find((user) => user.id === post.userId)?.name,
  image: {
   url: photos.find((photo) => photo.id === post.id)?.url,
   thumbnailUrl: photos.find((photo) => photo.id === post.id)?.thumbnailUrl,
  },
 }))
}

export default postsSlice.reducer
