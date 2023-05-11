import { all, takeEvery} from 'redux-saga/effects';
import { postWorker, postsWorker } from './posts/posts.saga';

export default function* rootSaga () {
  yield all([
    takeEvery("posts/fetchPosts", postsWorker),
    takeEvery("posts/fetchPost", postWorker),
  ]);
}