import React from "react";
import { Outlet } from "react-router-dom";
import LandingPageHeader from "./LandingPageHeader/LandingPageHeader";
import LandingPageFooter from "./LandingPageFooter/LandingPageFooter";

/**
 * Layout for the landing/home page: LandingPageHeader + main content + LandingPageFooter.
 * Use this in App.jsx for the route that should show the full-site nav and footer (e.g. Home).
 */
function LandingLayout() {
  return (
    <>
      <LandingPageHeader />
      <main className="">
        <Outlet />
      </main>
      <LandingPageFooter />
    </>
  );
}

export default LandingLayout;
