import { IconType } from "react-icons";

type BoxType = {
  Icon: IconType;
};
const Box = ({ Icon }: BoxType) => {
  const css = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  return (
    <div style={css}>
      <Icon />
    </div>
  );
};

export default Box;
