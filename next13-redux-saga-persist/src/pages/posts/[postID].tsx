import { GetStaticPropsContext } from "next/types";
import axios from "axios";
import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = ({ post }: { post: Post }) => {

  return (
    <div>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetStaticPropsContext) => {
  try {
    const postID = ctx.params?.postID;
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}`
    );

    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Post;
