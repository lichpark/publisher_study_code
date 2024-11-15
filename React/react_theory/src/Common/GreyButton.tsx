type Buttonprops = {
  bgcolor: string;
  fontColor: string;
};
const GreyButton = (props: Buttonprops) => {
  const style: React.CSSProperties = {
    backgroundColor: `${props.bgcolor}`,
    border: "1px solid #6B7280",
    padding: "12px 35px",
    borderRadius: "40px",
    color: `${props.fontColor}`,
  };
  return (
    <button style={style} className="test">
      Button
    </button>
  );
};
export default GreyButton;
