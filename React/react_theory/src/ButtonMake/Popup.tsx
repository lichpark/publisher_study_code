import Button, { buttonprop } from "./Button";
import Title, { TitleProp } from "./Title";

type popupprop = buttonprop & TitleProp;

const Popup = (props: popupprop) => {
  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
      }}
    >
      <Title {...props} />
      <Button {...props} />
    </div>
  );
};

export default Popup;
