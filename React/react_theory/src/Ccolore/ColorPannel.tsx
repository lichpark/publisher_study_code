export type colorPannelprop = {
  backgroundColor?: string;
};

const ColorPannel = ({ backgroundColor = "black" }: colorPannelprop) => {
  return (
    <div
      style={{
        backgroundColor,
        width: "10px",
        height: "10px",
        margin: "2px",
      }}
    ></div>
  );
};

export default ColorPannel;
