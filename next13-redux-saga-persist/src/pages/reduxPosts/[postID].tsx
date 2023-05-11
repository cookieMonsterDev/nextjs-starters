import { GetStaticPropsContext } from "next/types";
import { SagaStore, wrapper } from "@/store";
import { fetchPost } from "@/store/posts/posts.reducer";
import { END } from "redux-saga";
import { useAppSelector } from "@/store/useRedux";

const ReduxPost = () => {
  const { post } = useAppSelector((state) => state.posts);

  return (
    <div>
      <h1>Redux Post {post?.id}</h1>
      <p>{post?.title}</p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx: GetStaticPropsContext) => {
    const postID = ctx.params?.postID! as string;
    store.dispatch(fetchPost(postID));

    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return {
      props: {},
    };
  }
);

export default ReduxPost;
