"use server";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const ONE_DAY = 24 * 60 * 60 * 1000;
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function createSession(payload: any) {
  const expires = Date.now() + ONE_DAY;

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(SECRET);

  cookies().set("session", session, { expires, httpOnly: true });
}

export async function deleteSession() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession(): Promise<any | null> {
  const session = cookies().get("session")?.value;
  if (!session) return null;

  const { payload } = await jwtVerify(session, SECRET, {
    algorithms: ["HS256"],
  });

  return payload;
}
