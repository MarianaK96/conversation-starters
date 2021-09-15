import React from "react";
import { SideBarTitle } from "./SideBarNav.styles";

import { SideBar } from "../../molecules/SideBar/SideBar.styles";

const SideBarNav = ({ menuHidden }) => {
  return (
    <>
      <SideBar>
        <SideBarTitle menuHidden={menuHidden}>How to use</SideBarTitle>
      </SideBar>
    </>
  );
};

export default SideBarNav;
