"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Public Route",
    href: "/public",
  },
  {
    name: "Private Route",
    href: "/private",
  },
  {
    name: "Admin Route",
    href: "/admin",
  },
  {
    name: "Register",
    href: "/register",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="fixed top-0 left-0 h-10 w-screen bg-black z-10">
      <div className="container h-full flex items-center justify-between">
        <section className="space-x-4">
          {routes.map((e) => (
            <Link
              href={e.href}
              key={e.href}
              className={cn(
                "font-extrabold text-white",
                pathname === e.href && "text-green-500"
              )}
            >
              {e.name}
            </Link>
          ))}
        </section>
        <section>
          {session ? (
            <button className="text-white" onClick={() => signOut()}>
              LogOut
            </button>
          ) : (
            <button className="text-white" onClick={() => signIn()}>
              Login
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default NavBar;
