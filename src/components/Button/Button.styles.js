import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border: 0.063rem solid #008cba;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    background-color: #008cba;
    color: white;
  }
`;
