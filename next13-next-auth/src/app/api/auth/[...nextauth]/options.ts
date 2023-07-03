import { Api } from "@/core/axios";
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
        try {
          const { data } = await Api.post("/auth/login", {
            ...credentials,
          });

          console.log(data)

          return data;
        } catch (error) {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

export default options;
