import styled from "styled-components";

const handleColor = (commitCount) => {
  if (commitCount === 0) return "#161b22";
  else if (commitCount < 3) return "#0e4429";
  else if (commitCount < 13) return "#006d32";
  else if (commitCount < 21) return "#26a641";
  else return "#39d353";
};

export const StyledDay = styled.span`
  height: 0.625rem;
  width: 0.625rem;
  margin: 0.22rem;
  border-radius: 0.125rem;
  background-color: ${({ commitCount }) => handleColor(commitCount)};
  cursor: pointer;
`;
