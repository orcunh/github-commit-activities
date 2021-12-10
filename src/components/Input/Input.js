import {
  StyledWrapper,
  StyledLabel,
  StyledInput,
  StyledError
} from "./Input.styles";

export const Input = ({ type = "text", label, name, error, ...props }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} type={type} {...props} />
      {error && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};
