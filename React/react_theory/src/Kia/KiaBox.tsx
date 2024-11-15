import TextCar from "./TextCar";
import TextCarStatus, { kiaBoxProps } from "./TextCarStatus";

const KiaBox = (props: kiaBoxProps) => {
  const wrpstyle: React.CSSProperties = {
    width: "200px",
    height: "80px",
    backgroundColor: "#F5FDEB",
    display: "flex",
    flexDirection: "column",
    padding: "20px 24px",
    marginBottom: "5px",
    gap: "10px",
  };
  const top__div: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  const top__left: React.CSSProperties = {
    color: "#05141F",
  };

  const top__right: React.CSSProperties = {
    color: "#5D7D2B",
  };

  return (
    <div style={wrpstyle}>
      <TextCarStatus KeyName={props.KeyName} StatusName={props.StatusName} />
      <TextCar />
    </div>
  );
};

export default KiaBox;
