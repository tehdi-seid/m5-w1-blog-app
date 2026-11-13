import React from "react";
import MainNave from "../components/MainNave";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function SiteLayout() {
  return (
    <div>
      <MainNave />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
