import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);

        const user = { id: "42", email: "nextauth", password: "nextauth" };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          console.log(user)
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default options;
