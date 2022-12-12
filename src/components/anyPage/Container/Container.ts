import styled from "styled-components";

export const ContainerSC = styled("div")<{ maxWidth?: number }>`
  max-width: ${({ maxWidth = 1500 }) => maxWidth}px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  position: relative;
  flex-direction: column;
`;
