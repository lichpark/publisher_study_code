import MusinsaPertxt, { MusinsaPertxtProps } from "./MusinsaPertxt";
import MusinsaPrice, { musinsaPrice } from "./MusinsaPrice";

type priceProps = MusinsaPertxtProps & musinsaPrice;

const MusinsaPriceAndPer = (props: priceProps) => {
  //const { text, color, price } = props; //2번 주석일때 사용한것

  return (
    // <div style={{ display: "flex", gap: "5px" }}>
    //   {!!props.text && <MusinsaPertxt text={props.text} color={props.color} />}
    //   <MusinsaPrice price={props.price} />
    // </div>

    // <div style={{ display: "flex", gap: "5px" }}>
    //   <MusinsaPertxt text={text} color={color} />
    //   <MusinsaPrice price={price} />
    // </div>

    <div style={{ display: "flex", gap: "5px" }}>
      <MusinsaPertxt {...props} />
      <MusinsaPrice {...props} />
    </div>
  );
};

export default MusinsaPriceAndPer;
