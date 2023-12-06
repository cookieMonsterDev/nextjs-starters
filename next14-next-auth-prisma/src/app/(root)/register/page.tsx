"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      console.log("register ok");

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type="submit">register</button>
      </form>{" "}
    </div>
  );
};

export default Register;
