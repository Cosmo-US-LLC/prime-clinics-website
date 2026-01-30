import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ['/privacy-policy', '/terms-and-conditions'];
  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>  
      {!shouldHideNavbarFooter && (
        <div className=""><Navbar /></div>
      )}
      <div className="">
        <Outlet />
      </div>
      {!shouldHideNavbarFooter && (
        <div className="">
          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
