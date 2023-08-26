"use client";
import React, { useState } from "react";
import styles from "./create.module.css";
import { createPost } from "@/actions/create";

interface FromData {
  title: string;
  body: string;
  userId?: number;
}

const Create = () => {
  const [data, setData] = useState<FromData>({
    title: "",
    body: "",
    userId: undefined,
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await createPost(data as any);
    } catch (e) {
      setMessage("Some error");
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setData({ ...data, body: e.target.value })}
        />
        <input
          type="number"
          onChange={(e) => setData({ ...data, userId: Number(e.target.value) })}
        />
        {message && <span>{message}</span>}
        <button>submit</button>
      </form>
    </main>
  );
};

export default Create;
