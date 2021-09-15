import React from "react";
import { SideBarMenuStyles, SideBarMenuTextStyle } from "./SideBarMenu.styles";

const SideBarMenu = ({ menuHidden, setMenuHidden }) => {
  return (
    <>
      <SideBarMenuStyles menuHidden={menuHidden} setMenuHidden={setMenuHidden}>
        <SideBarMenuTextStyle>
          <li>Click on the black card</li>
          <li>Select a category</li>
          <li>Enjoy the conversation!</li>
        </SideBarMenuTextStyle>
      </SideBarMenuStyles>
    </>
  );
};

export default SideBarMenu;
