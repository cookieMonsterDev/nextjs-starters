import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Link href={"/posts"}>
          <li>Posts</li>
        </Link>
      </ul>
      <ul>
        <Link href={"/reduxPosts"}>
          <li>ReduxPosts</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
