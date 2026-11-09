import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="md:pl-72 pt-16 md:pt-0">
        <main>{children}</main>
        <Footer />
      </div>
      <WhatsAppFab />
    </div>
  );
};

export default Layout;
