import { db } from "@/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const CreateUserForm = () => {
  return (
    <form
      className="flex gap-4"
      action={async (formData) => {
        "use server";

        const username = formData.get("username") as string;

        await db.insert(users).values({ username }).execute();
        revalidatePath("/");
      }}
    >
      <input
        className="px-2 rounded-md text-black"
        name="username"
        placeholder="username"
      />
      <button
        type="submit"
        className="py-1 px-4 rounded-md bg-slate-200 hover:bg-slate-700 transition-colors duration-300 text-black"
      >
        create
      </button>
    </form>
  );
};
