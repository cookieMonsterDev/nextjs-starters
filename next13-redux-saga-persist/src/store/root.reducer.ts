import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts/posts.reducer";

export default combineReducers({
  posts: postsReducer,
});
