import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Button = styled.button<{ primary: boolean }>`
  background-color: "red";
  padding: 10px 20px;
  color: ${(props) => (props.primary ? "black" : "white")};
`;

const TestButton = () => {
  return <Button primary={true}></Button>;
};

export default TestButton;
