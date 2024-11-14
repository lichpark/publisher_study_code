type PortrateProps = {
  content: string;
  imgpath: string;
  alt: string;
  fontColor: string;
  width: string;
  height: string;
  classname: string;
};

const Portrate = (props: PortrateProps) => {
  const imgStyle: React.CSSProperties = {
    width: `${props.width}`,
    height: `${props.height}`,
    borderRadius: "9999px",
  };
  // const divStyle: React.CSSProperties = {
  //   width: `${props.width}`,
  //   textAlign: "center",
  // };
  const spanStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "15px",
    color: `${props.fontColor}`,
    width: `${props.width}`,
    textAlign: "center",
  };
  const wrpspan: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={wrpspan} className={props.classname}>
      <img src={props.imgpath} style={imgStyle} alt={props.alt} />
      <span style={spanStyle}>{props.content}</span>
    </div>
  );

  //   return (
  //     <>
  //       <img src={props.imgpath} style={imgStyle} alt={props.alt} />
  //       <span style={spanStyle}>{props.content}</span>
  //     </>
  //   );
};

export default Portrate;
