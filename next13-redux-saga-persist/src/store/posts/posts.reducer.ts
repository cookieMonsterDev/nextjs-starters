import type { PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./posts.types";
import { createHydrationSlice } from "../createHydrationSlice";

const initialState: PostsState = {
  posts: null,
  post: null,
  error: null,
  counter: 1,
};

const postsSlice = createHydrationSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.error = null;
    },
    fetchPostsSuccess: (state, { payload }: PayloadAction<Post[]>) => {
      state.error = null;
      state.posts = payload;
    },
    fetchPostsFailure: (state, { payload }: PayloadAction<string>) => {
      state.posts = null;
      state.error = payload;
    },
    fetchPost: (state, { payload }: PayloadAction<string>) => {
      state.error = null;
    },
    fetchPostSuccess: (state, { payload }: PayloadAction<Post>) => {
      state.error = null;
      state.post = payload;
    },
    fetchPostFailure: (state, { payload }: PayloadAction<string>) => {
      state.post = null;
      state.error = payload;
    },
    inc: (state) => {
      state.counter += 1;
    },
  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPost,
  fetchPostFailure,
  fetchPostSuccess,
  inc
} = postsSlice.actions;

export default postsSlice.reducer;
