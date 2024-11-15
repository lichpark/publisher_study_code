export type buttonprop = {
  buttonText?: string;
};
const Button = ({ buttonText = "button default" }: buttonprop) => {
  return (
    <button
      style={{
        padding: "10px 0",
        backgroundColor: "black",
        border: "none",
        borderRadius: "4px",
        color: "white",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
