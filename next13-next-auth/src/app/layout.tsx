import "./globals.css";
import { NavBar } from "@/components/NavBar";
import AppProvider from "@/context/appProvider";
import AuthProvider from "@/context/authProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Next auth",
  description: "Owned by Mykhailo Toporkov",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <AuthProvider>
        <AppProvider>
          <body>
            <NavBar />
            {children}
          </body>
        </AppProvider>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
