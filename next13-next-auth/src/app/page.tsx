import { getServerSession } from "next-auth"
import options from "../app/api/auth/[...nextauth]/options"

export default async function Home() {
  const session = await getServerSession(options)

  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  )
}
