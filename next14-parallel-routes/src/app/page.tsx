"use client";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const onClickGet = async () => {
    try {
      const res = await fetch(`/api/posts?id=${counter}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex gap-2">
      <h1>{counter}</h1>
      <button
        onClick={onClickGet}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Get user!
      </button>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        add
      </button>
    </main>
  );
}
