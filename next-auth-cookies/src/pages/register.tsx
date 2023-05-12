import NavBar from "@/components/NavBar";
import { useFormik } from "formik";

const Register = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <div>
      <NavBar />
      <h1>Register page</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
