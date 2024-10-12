import { type PropsWithChildren } from 'react'
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next 14 custom auth with session cookies",
  description: "Next 14 custom auth with session cookies",
};

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout