import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  const css = {
    display: "flex",
    gap: "5px",
    backgroundColor: "pink",
    width: "300px",
  };
  return <header style={css}>{children}</header>;
};

export default Header;
