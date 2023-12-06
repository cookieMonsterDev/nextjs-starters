import NextAuth from "next-auth/next";
import { User } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
