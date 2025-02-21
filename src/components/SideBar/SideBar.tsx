import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SideBar.css";
import SideBarNav from "./SidebarNav";
import SidebarNavToggle from "./SidebarNavToggle";

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  const dashboardNav = [
    { eventKey: "dashboard", title: "Dashboard", to: "/" }
  ];

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <>
      <div className="btn-sidebar-nav">
        <SidebarNavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </div>
      <div className={"sidebar " + (expand ? "visible" : "")}>
        <SideBarNav navs={dashboardNav} />
      </div>
    </>
  );
};
  
export default SideBar;
