import { changeWon } from "../function/utils";

export type musinsaPrice = { price: number };

export const MusinsaPrice = (props: musinsaPrice) => {
  const style: React.CSSProperties = {
    fontWeight: "bold",
  };
  const { price } = props;

  //   return <span style={style}>{changeWon(props.price)} 원</span>; old
  return <span style={style}>{changeWon(price)} 원</span>;
};

export default MusinsaPrice;
