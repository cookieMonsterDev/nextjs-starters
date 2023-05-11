import React from "react";
import axios from "axios";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = ({ posts }: { posts: Post[] }) => {

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map((e) => (
            <Link href={`/posts/${e.id}`} key={e.id}>
              <li>{e.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Posts;
