import ColorPannel, { colorPannelprop } from "./ColorPannel";
import Info, { InfoProps } from "./Info";
import Name, { nameProps } from "./Name";

//type PanelWrapprop = InfoProps & nameProps & colorPannelprop;
type PanelWrapprop = InfoProps & nameProps & { bgcolors: colorPannelprop[] };

const PanelWrap = (props: PanelWrapprop) => {
  //   const list = [
  //     { backgroundColor: "red" },
  //     { backgroundColor: "blue" },
  //     { backgroundColor: "green" },
  //   ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "7px",
      }}
    >
      <Name {...props} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Info {...props} />
        <div style={{ display: "flex", gap: "2px" }}>
          {/* <ColorPannel backgroundColor={"pink"} />
          <ColorPannel backgroundColor={"green"} />
          <ColorPannel backgroundColor={"yellow"} /> */}
          {/* {list.map((v) => (
            <ColorPannel {...v} />
          ))} */}
          {props.bgcolors.map((v) => (
            <ColorPannel {...v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelWrap;
