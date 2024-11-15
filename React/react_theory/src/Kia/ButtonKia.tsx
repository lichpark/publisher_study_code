import React from "react";

const ButtonKia = (props: { buttonText: string }) => {
  const buttonCss: React.CSSProperties = {
    border: "1px solid #e6e7e9",
    padding: "8px 14px",
    backgroundColor: "white",
  };
  return <button style={buttonCss}>{props.buttonText}</button>;
};

export default ButtonKia;
