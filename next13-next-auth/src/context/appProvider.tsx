"use client";
import useRefreshToken from "@/lib/useRefreshToken";
import { Fragment } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  useRefreshToken()

  return <Fragment>{children}</Fragment>;
};

export default AppProvider;
