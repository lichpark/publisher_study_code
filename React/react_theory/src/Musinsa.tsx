type MusinsaProp = { content: string };
const Musinsa = (props: MusinsaProp) => {
  const styleCont: React.CSSProperties = {
    border: "1px solid black",
    padding: "10px",
    fontSize: "20px",
  };
  return <button style={styleCont}>{props.content}</button>;
};
export default Musinsa;
