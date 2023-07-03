"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useRefreshToken = () => {
  const { data: session, status } = useSession()
  
  console.log(session)


  useEffect(() => {
    const interval = setInterval(() => console.log('test'), 100000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useRefreshToken;
