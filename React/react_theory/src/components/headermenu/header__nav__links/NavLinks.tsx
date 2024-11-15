import { ReactNode } from "react";
import { Pill, colorObj } from "../../../styles/color";

type NavLinkProp = {
  headerNavText?: ReactNode;
  headerNavLink?: string;
  color?: Pill;
};

export const NavLinks = ({
  color = "header_a_deco_white",
  headerNavText = "",
  headerNavLink = "",
}: NavLinkProp) => {
  const NavLink__Css: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const NavLink__aCss: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: "400px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${colorObj[color]}`,
    textDecoration: "none",
    whiteSpace: "nowrap",
    padding: "10px 5px",
  };
  return (
    <li style={NavLink__Css}>
      <a href={headerNavLink} style={NavLink__aCss}>
        {headerNavText}
      </a>
    </li>
  );
};

export default NavLinks;
