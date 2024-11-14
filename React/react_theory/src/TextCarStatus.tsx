export type kiaBoxProps = {
  KeyName: string;
  StatusName: "대기" | "미완료";
};

const TextCarStatus = (props: kiaBoxProps) => {
  const top__div: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };
  const bottom__div: React.CSSProperties = {
    fontSize: "25px",
  };

  const top__left: React.CSSProperties = {
    color: "#05141F",
  };

  const top__right: React.CSSProperties = {
    color: "#5D7D2B",
  };

  return (
    <>
      <div style={top__div}>
        <span style={top__left}>{props.KeyName}</span>
        <span style={top__right}>{props.StatusName}</span>
      </div>
    </>
  );
};

export default TextCarStatus;
