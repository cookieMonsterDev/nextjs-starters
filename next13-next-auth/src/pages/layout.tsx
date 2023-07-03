import { NavBar } from "@/components/NavBar";
import "./globals.css";
import useRefreshToken from "@/core/useRefreshToken";

export const metadata = {
  title: "Next auth",
  description: "Owned by Mykhailo Toporkov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // useRefreshToken()

  return (
    <html>
      <body>
        <NavBar
          tabsList={[
            { name: "Home", href: "/" },
            { name: "Posts", href: "/posts" },
            { name: "User", href: "/user" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
