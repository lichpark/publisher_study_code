import React from "react";

const TextDesc = (props: { descText1: string }) => {
  const textDescCss: React.CSSProperties = {
    color: "#697279",
    whiteSpace: "pre-wrap",
    marginBottom: "10px",
    textAlign: "center",
    lineHeight: "25px",
  };
  return (
    <div style={textDescCss}>
      <div>{props.descText1}</div>
    </div>
  );
};

export default TextDesc;
