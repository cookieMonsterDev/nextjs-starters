"use client";
import Link from "next/link";
import { NavBarProps } from "./NavBar.types";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";
import { Session } from "next-auth";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabsList }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const session = await getSession();
        setSession(session);
      } catch (e) {
        setSession(null);
      }
    }

    fetchSession();
  }, []);


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
