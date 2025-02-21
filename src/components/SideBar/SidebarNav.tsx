import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemData {
  eventKey?: string;
  title?: string;
  to?: string;
}

interface SidebarNavProps {
  navs: NavItemData[];
}

const SideBarNav: React.FC<SidebarNavProps> = ({ navs }) => {
  return (
    <div className="sidebar-nav">
      <ul>
        {navs.map((item) => (
          <li key={item.eventKey}>
            <NavLink to={item.to || "/"}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarNav;
