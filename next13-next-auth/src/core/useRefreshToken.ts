"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useRefreshToken = () => {
  // const all = useSession();
  
  // console.log(all)


  useEffect(() => {
    const interval = setInterval(() => {}, 100000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useRefreshToken;
