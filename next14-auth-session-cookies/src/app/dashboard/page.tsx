import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { LogoutButton } from "@/components/logout-button";

import Link from "next/link";
import { cn } from "@/lib/utils";

async function Dashboard() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Page</CardTitle>
          <CardDescription>Dashboard Page Description</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/client"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            Client
          </Link>
        </CardContent>
        <CardFooter>
          <LogoutButton />
        </CardFooter>
      </Card>
    </main>
  );
}

export default Dashboard;
