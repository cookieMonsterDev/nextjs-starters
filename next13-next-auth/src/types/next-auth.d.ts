import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    expires: Date;
    user?: {
      username?: string;
      email: string;
      hash: string;
      firstName?: string;
      lastName?: string;
      role?: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}
