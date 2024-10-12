import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSession } from "@/lib/auth-server";

const privateRoutes = ["/dashboard"];

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const session = await getSession();

  if (!session && privateRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && !privateRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
