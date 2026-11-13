import React from "react";
import MainNave from "../components/MainNave";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

function SiteLayout() {
  return (
    <div>
      <ScrollTop />
      <MainNave />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
