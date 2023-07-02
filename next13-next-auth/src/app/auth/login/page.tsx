'use client'
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import Link from "next/link";
import { Input } from "@/components/Input";

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      return;
    },
  });

  return (
    <div className="absolute inset-0 w-96 h-fit m-auto p-8 bg-white shadow-lg shadow-Zinc-500/50">
      <h1 className="font-semibold text-2xl mb-7">Sign in to your account</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Your email"
          placeholder="Email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          label="Password"
          placeholder="password"
          name="password"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          className="w-full bg-sky-500 p-1 rounded-lg text-white text-lg font-medium hover:bg-sky-200 hover:text-sky-500 transition-colors"
        >
          Sign in
        </button>
      </form>
      <p className="mt-5 text-slate-500">
        Don’t have an account yet?{" "}
        <Link
          href="register"
          className="text-blue-600 font-medium transition-all hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
