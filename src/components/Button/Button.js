import { StyledButton } from "./Button.styles";

export const Button = ({ type = "button", children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
