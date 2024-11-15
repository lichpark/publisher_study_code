import { changeWon } from "../function/utils";

export type InfoProps = {
  Price?: number;
};
const Info = (props: InfoProps) => {
  const { Price = 0 } = props;
  return (
    <div style={{ color: "#363636b3", fontSize: "14px" }}>
      \{changeWon(Price)}
    </div>
  );
};

export default Info;
