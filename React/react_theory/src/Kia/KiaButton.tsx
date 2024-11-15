import { colorObj } from "./color";

type backgroundColorType = "grey90" | "grey80" | "grey70";

type kiaButtonCss = {
  //bgcolor: bgcolorText;
  bgcolor: backgroundColorType;
  titleText: string;
};

const KiaButton = (props: kiaButtonCss) => {
  const kiaButtonCss: React.CSSProperties = {
    width: "200px",
    height: "50px",
    borderRadius: "5px",
    backgroundColor: colorObj[props.bgcolor],
    color: "white",
    marginRight: "5px",
    border: "none",
  };
  return <button style={kiaButtonCss}>{props.titleText}</button>;
};

export default KiaButton;
