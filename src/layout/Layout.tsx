import { useRouter } from "next/dist/client/router";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen flex relative flex-col ${
        router.pathname.includes("/dashboard") ? "bg-white" : "bg-primary-body"
      }`}
    >
      <Navbar />
      
      <main className="flex w-full h-full mx-auto max-w-6xl px-4 flex-grow">
        <div className="py-6 w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
