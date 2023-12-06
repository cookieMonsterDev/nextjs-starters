// export { default } from "next-auth/middleware";

import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    async function middleware(request: NextRequestWithAuth) {
        // console.log(request.nextUrl.pathname)
        // console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/admin")) {
              console.log(request.nextauth)

            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }

    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: ["/private", "/admin"] };
