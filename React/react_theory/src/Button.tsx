const Button = () => {
  //1. css 파일 만들고 꾸미기

  //2.inline으로 하기
  const name = "BTS";
  const css: React.CSSProperties = {
    color: "white",
    border: "none",
    margin: "0px 5px",
    padding: "5px",
    backgroundColor: "blue",
  };

  return <button style={css}>{name} 버튼</button>;
};
export default Button;
