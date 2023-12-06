"use server";

import { redirect } from "next/navigation";

interface MyFromData {
  title: string;
  body: string;
  userId?: number;
}

export const createPost = async (payload: MyFromData) => {
  try {
    if (!payload.title || !payload.body || !payload.userId)
      throw new Error("There was an error.");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...payload,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    console.log(data);

    redirect(`/${data.id}`);
  } catch (e) {
    throw e;
  }
};
