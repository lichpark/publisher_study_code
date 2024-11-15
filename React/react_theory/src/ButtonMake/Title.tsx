export type TitleProp = {
  message?: string;
};
const Title = ({ message = "title default" }: TitleProp) => {
  return (
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "#05141F" }}>
      {message}
    </div>
  );
};

export default Title;
