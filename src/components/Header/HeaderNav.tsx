import React from "react";
import { Menu, MenuItem, MenuButton, Link } from "@aws-amplify/ui-react";
// Removed unused import: useNavigate from "react-router-dom"
import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";

const HeaderNav = () => {
  return (
    <>
      {baseConfig.projectLink ? (
        <div className="github-link">
          <Link
            href="https://github.com/stahfeyto"
            isExternal={true}
            aria-label="github"
          >
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
          <div className="header-avatar">
            <img alt="avatar" src="/avatar.jpeg" />
          </div>

          </MenuButton>
        }
      >
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
