import React from "react";

type textmainprop = {
  mainText: string;
};

const TextMain = (prop: textmainprop) => {
  const maincss: React.CSSProperties = {
    fontWeight: "bold",
    color: "#05141f",
    whiteSpace: "pre-wrap",
    fontSize: "25px",
  };
  return <div style={maincss}>{prop.mainText}</div>;
};

export default TextMain;
