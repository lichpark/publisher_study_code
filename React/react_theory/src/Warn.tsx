import ButtonKia from "./ButtonKia";
import TextDesc from "./TextDesc";
import TextMain from "./TextMain";

const Warn = (props: {
  mainText: string;
  descText1: string;
  buttonText: string;
}) => {
  const warnCss: React.CSSProperties = {
    padding: "30px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    width: "500px",
    margin: "0 auto",
  };
  return (
    <div style={warnCss}>
      <TextMain mainText={props.mainText}></TextMain>
      <TextDesc descText1={props.descText1}></TextDesc>
      <ButtonKia buttonText={props.buttonText}></ButtonKia>
    </div>
  );
};

export default Warn;
