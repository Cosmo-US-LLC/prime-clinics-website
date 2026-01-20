import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

function Layout() {

  return (
    <>  
      <div className=""><Navbar /></div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
