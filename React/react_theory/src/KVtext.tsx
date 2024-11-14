type KVtextProps = {
  titleText: string;
  dataText: string;
};
const KVtext = (props: KVtextProps) => {
  const wrpstyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "5px",
    border: "none",
    padding: "5px",
    width: "300px",
  };
  const leftStyle: React.CSSProperties = {
    color: "#697279",
    fontSize: "17",
    fontWeight: "bold",
  };
  const rightStyle: React.CSSProperties = {
    fontSize: "17",
    fontWeight: "bold",
  };

  return (
    <div style={wrpstyle}>
      <div style={leftStyle}>{props.titleText}</div>
      <div style={rightStyle}>{props.dataText}</div>
    </div>
  );
};

export default KVtext;
