import React from "react";
import { Pill, colorObj } from "../../styles/color";

type pillButtonProp = {
  buttonText: string;
  bgcolor: Pill;
  color: Pill;
};

const PillButton = (props: pillButtonProp) => {
  const pillButtonCss: React.CSSProperties = {
    fontSize: "17px",
    lineHeight: "1.17648",
    fontWeight: "400",
    letterSpacing: ".022em",
    border: `1px solid ${colorObj[props.bgcolor]}`,
    backgroundColor: `${colorObj[props.bgcolor]}`,
    borderRadius: "980px",
    minWidth: "28px",
    padding: "11px 21px",
    color: `${colorObj[props.color]}`,
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
  };
  return <button style={pillButtonCss}>{props.buttonText}</button>;
};

export default PillButton;
