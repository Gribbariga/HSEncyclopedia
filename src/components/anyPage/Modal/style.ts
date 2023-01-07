import styled from "styled-components";

const OverlaySC = styled("div")<{ isActive: boolean }>`
  z-index: 9999;
  transition: all 0.3s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  overflow: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const useModalStyle = () => ({
  OverlaySC,
});
