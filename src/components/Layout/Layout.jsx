

"use client";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";


const Layout = ({ children }) => {
  return (
    <>
    
      <Navbar />
      <main>{children}</main>
      <Footer />
      
    </>
  );
};

export default Layout;
