export type MainContainer_gbimgProp = {
  bgimg?: string;
};

const MainContainer_gbimg = (props: MainContainer_gbimgProp) => {
  const { bgimg = "" } = props;

  const css: React.CSSProperties = {
    background: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "50vh",
    margin: "0",
  };
  return <div style={css}></div>;
};

export default MainContainer_gbimg;
