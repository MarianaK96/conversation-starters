import React, { useState } from "react";

import SideBarNav from "../../atoms/SideBarNav/SideBarNav";
import SideBarMenu from "../../atoms/SideBarMenu/SideBarMenu";

const SideBar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  return (
    <>
      <div onClick={() => setMenuHidden(!menuHidden)}>
        <SideBarNav menuHidden={menuHidden} />
      </div>

      <SideBarMenu menuHidden={menuHidden} />
    </>
  );
};

export default SideBar;

//useState here so that I can pass the props down to the sidebar menu and the nav
//menuHidden, setMenuHidden = true
//when true width = 0, when false width = 250px
//pass down that prop to sidebarmenu
