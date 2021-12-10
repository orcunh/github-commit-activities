import styled from "styled-components";

export const StyleDays = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.74rem;

    &:nth-child(odd) {
      visibility: hidden;
    }
  }
`;
