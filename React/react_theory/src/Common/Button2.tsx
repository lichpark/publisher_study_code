type Buttonprops = {
  fontColor: string;
};

type InnerText = "뉴발란스 메가 위크" | "제이에스티나X앨리스펑크" | "스니커즈";

const Button2 = (props: Buttonprops) => {
  const style: React.CSSProperties = {
    padding: "10px",
    color: `${props.fontColor}`,
    marginRight: "5px",
  };
  return <button>제이에스티나</button>;
};

export default Button2;
