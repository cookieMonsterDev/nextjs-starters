import styles from "./page.module.css";
import { Post } from "@/types";
import Link from "next/link";

interface HomeProps {
  searchParams: {
    order: "asc" | "desc";
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Post[];

  const managedData = data.sort((a, b) =>
    searchParams.order === "asc" ? a.id - b.id : b.id - a.id
  );

  return (
    <main className={styles.main}>
      <section className={styles.order}>
        <Link href={{ pathname: "/", query: { order: "asc" } }}>INC</Link>
        <Link href={{ pathname: "/", query: { order: "desc" } }}>DEC</Link>
      </section>
      {data &&
        data.map((e) => (
          <Link key={e.id} href={`/${e.id}`}>
            <div className={styles.post}>
              <section>{e.id}</section>
              <section>{e.title}</section>
              <section>{e.body}</section>
            </div>
          </Link>
        ))}
    </main>
  );
}
