import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
          <CardDescription>Home Page Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Login
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Home;
