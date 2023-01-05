import styled from "styled-components";

const OverlaySC = styled("div")<{ isActive: boolean }>`
  transition: all 3.4s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const useModalStyle = () => ({
  OverlaySC,
});
