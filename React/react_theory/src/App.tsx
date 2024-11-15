import React from "react";
import PillButton from "./components/buttons/PillButton";
import HeaderMenu from "./components/layout/header/HeaderMenu";
import NavLinks from "./components/headermenu/header__nav__links/NavLinks";
import { icons } from "./constants/Icons";
import { NavLinksIcon } from "./components/headermenu/header__nav__links/NavLinksIcon";
import Main1 from "./components/layout/main/main1/Main1";

function App() {
  return (
    <div className="App">
      {/* <PillButton
        buttonText="더 알아보기"
        bgcolor="pill_button_blue"
        color="pill_button_white"
      ></PillButton> */}
      <>
        <HeaderMenu
          bgcolor={"pill_button_black"}
          children={[
            <NavLinksIcon Icon={icons.apple} headerNavLink="" />,
            <NavLinks headerNavText={"스토어"} headerNavLink="" />,
            <NavLinks headerNavText={"Mac"} headerNavLink="" />,
            <NavLinks headerNavText={"iPad"} headerNavLink="" />,
            <NavLinks headerNavText={"iPhone"} headerNavLink="" />,
            <NavLinks headerNavText={"Watch"} headerNavLink="" />,
            <NavLinks headerNavText={"Vision"} headerNavLink="" />,
            <NavLinks headerNavText={"airPods"} headerNavLink="" />,
            <NavLinks headerNavText={"TV 및 홈"} headerNavLink="" />,
            <NavLinks headerNavText={"엔터테인먼트"} headerNavLink="" />,
            <NavLinks headerNavText={"액세서리"} headerNavLink="" />,
            <NavLinks headerNavText={"고객지원"} headerNavLink="" />,
            <NavLinksIcon Icon={icons.FaMagnifyingGlass} headerNavLink="" />,
            <NavLinksIcon Icon={icons.IoBag} headerNavLink="" />,
          ]}
        />
        <Main1 />
      </>
    </div>
  );
}

export default App;
