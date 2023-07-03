import { NavBar } from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Next auth",
  description: "Owned by Mykhailo Toporkov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
