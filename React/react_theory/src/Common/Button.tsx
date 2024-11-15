type MainColor = "#2A59FE" | "#557AFE";
type SubColor = "grey" | "white";

type ButtonProps = {
  bgcolor: MainColor;
  //txt: "Primary" | "Secondary";
  content: string;
  color: SubColor;
};
const Button = (props: ButtonProps) => {
  const style: React.CSSProperties = {
    backgroundColor: `${props.bgcolor}`,
    padding: "8px 16px",
    borderRadius: "4px",
    fontWeight: "700",
    color: `${props.color}`,
  };

  return <button style={style}>{props.content}</button>;
};

export default Button;
