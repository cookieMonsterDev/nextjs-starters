import NavBar from "@/components/NavBar";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => signIn("credentials", { ...values, redirect: false }),
  });

  return (
    <div>
      <NavBar />
      <h1>Login page</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          name="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
