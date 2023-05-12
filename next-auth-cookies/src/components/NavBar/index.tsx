import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <Link href={"/"}>
          <li>home</li>
        </Link>
        <Link href={"/login"}>
          <li>login</li>
        </Link>
        <Link href={"/register"}>
          <li>register</li>
        </Link>
        <Link href={"/users"}>
          <li>users</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
