'use client'
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
