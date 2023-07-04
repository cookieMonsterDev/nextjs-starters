"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Api } from "./axios";

const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const getTokens = async () => {
    const { data } = await Api.get("/auth/refresh", {
      headers: {
        Authorization: `Bearer ${session?.user?.refreshToken}`,
      },
    });

    return data;
  };

  const updateTokens = async () => {
    if (!session) return;

    const { refreshToken, accessToken } = await getTokens();
    await update({
      user: { ...session.user, refreshToken, accessToken },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => updateTokens(), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useRefreshToken;
