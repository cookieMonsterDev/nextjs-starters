"use client";
import Link from "next/link";
import { NavBarProps } from "./NavBar.types";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react"

export const NavBarComponent: React.FC<NavBarProps> = ({ tabsList }) => {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const session = await getSession();
        setSession(session)
      } catch (e) {
        setSession(null);
      }
    }

    fetchSession();
  }, []);

  return (
    <nav className="p-4">
      <ul className="flex text-2xl font-bold gap-6">
        {tabsList.map((e) => (
          <Link href={e.href} key={e.name}>
            {e.name.toLocaleUpperCase()}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
