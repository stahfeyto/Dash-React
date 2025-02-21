import React from "react";
import { Outlet } from "react-router-dom";
import { baseConfig } from "../../config";
import SideBar from "../SideBar";
import Header from "../Header";

import "./Layout.css";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = () => {
  return (
    <div className="layout-container">
      {baseConfig.header ? <Header /> : <></>}
      <SideBar />

      {/* */}
      <div className="page-container">
        <Outlet />
      </div>

    </div>
  );
};

export default Layout;
