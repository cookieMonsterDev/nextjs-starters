import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex space-x-4 p-4 bg-white text-black">
      <Link href="/">HOME</Link>
      <Link href="/posts">POSTS</Link>
      <Link href="/users">USERS</Link>
    </nav>
  );
};
