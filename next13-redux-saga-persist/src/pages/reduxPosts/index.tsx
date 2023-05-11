import { SagaStore, wrapper } from "@/store";
import { END } from "redux-saga";
import { fetchPosts, inc } from "@/store/posts/posts.reducer";
import Link from "next/link";
import { useAppSelector } from "@/store/useRedux";

const ReduxPosts = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div>
      <h1>Redux Posts</h1>
      <ul>
        {posts &&
          posts.map((e) => (
            <Link href={`/reduxPosts/${e.id}`} key={e.id}>
              <li>{e.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchPosts());

    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return {
      props: {},
    };
  }
);

export default ReduxPosts;
