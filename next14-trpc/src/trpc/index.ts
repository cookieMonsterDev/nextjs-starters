import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  }),
  getPost: publicProcedure.input(z.number()).query(async (ctx) => {
    const { input } = ctx;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${input}`
    );
    const data = await res.json();
    return data;
  }),
});

export type AppRouter = typeof appRouter;
