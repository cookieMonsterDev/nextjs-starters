"use client";
import { Button } from "@/components/ui/button";

import { deleteSession } from "@/lib/auth-server";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  async function onClick() {
    await deleteSession();
    router.refresh();
  }

  return <Button onClick={onClick}>Logout</Button>;
};
