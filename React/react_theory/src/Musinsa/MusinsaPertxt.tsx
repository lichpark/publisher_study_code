import React from "react";

export type MusinsaPertxtProps = {
  text: number;
  color: string;
};

export const MusinsaPertxt = (props: MusinsaPertxtProps) => {
  const style: React.CSSProperties = {
    color: `${props.color}`,
    fontWeight: `bold`,
  };
  //   if(props.text ==0){
  //     return  <span></span>
  //   }
  //return <span style={style}>{props.text ==0? "":props.text+"%"}</span>;
  //return <span style={style}>{props.text && props.text + "%"}</span>; 이거 0으로 나오네?

  //return <span style={style}>{props.text + "%"}</span>; old
  const { text } = props;
  return <span style={style}>{text}%</span>;
};

export default MusinsaPertxt;
