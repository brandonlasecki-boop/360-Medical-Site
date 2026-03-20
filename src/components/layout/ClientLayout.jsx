"use client";

import { useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import Footer from "./footer";
import { MenuProvider } from "@/context/MenuContext";


export default function ClientLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <MenuProvider>
      <Header onMenuToggle={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </MenuProvider>
  );
}
