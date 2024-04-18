import { CreateUserForm } from "@/components/create-user-form";
import { db } from "@/db";

export default async function Home() {
  const data = await db.query.users.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CreateUserForm />
      <ol className="mt-4">
        {data.map((e) => (
          <li key={e.id} className="text-white">
            {e.username}
          </li>
        ))}
      </ol>
    </main>
  );
}
