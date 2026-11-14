import React from "react";
import MainNave from "../components/MainNave";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

function SiteLayout() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <ScrollTop />
      <MainNave />
      <main>
        <Outlet />
      </main>
      {!pathname.startsWith("/posts/") && <Footer />}
    </div>
  );
}

export default SiteLayout;
