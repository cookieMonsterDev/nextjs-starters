"use client";
import Link from "next/link";
import { NavBarProps, Tab } from "./NavBar.types";
import { useSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";

const defaultTabsList: Tab[] = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
  { name: "User", href: "/user" },
];

export const NavBarComponent: React.FC<NavBarProps> = ({
  tabsList = defaultTabsList,
}) => {
  const { data: session } = useSession();

  return (
    <nav className="p-4 flex space justify-between">
      <ul className="flex text-2xl font-bold gap-6">
        {tabsList.map((e) => (
          <Link href={e.href} key={e.name}>
            {e.name.toLocaleUpperCase()}
          </Link>
        ))}
      </ul>
      <div>
        <button
          onClick={session ? () => signOut() : () => signIn()}
          className="bg-sky-500 p-2 rounded-lg text-white text-lg font-medium hover:bg-sky-200 hover:text-sky-500 transition-colors"
        >
          {session ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </nav>
  );
};
