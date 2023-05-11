import { call, put } from "redux-saga/effects";
import axios, { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPostFailure,
  fetchPostSuccess,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "./posts.reducer";

export function* postsWorker() {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );

    yield put(fetchPostsSuccess(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(fetchPostsFailure(error.response?.data.message));
      return;
    }

    yield put(fetchPostsFailure("Unknown error"));
  }
}

export function* postWorker({ payload }: PayloadAction<string>) {
  try {
    const { data } = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
    );

    yield put(fetchPostSuccess(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(fetchPostFailure(error.response?.data.message));
      return;
    }

    yield put(fetchPostFailure("Unknown error"));
  }
}
