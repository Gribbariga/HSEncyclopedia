import styled from "styled-components";

const ContainerSC = styled("div")``;

const WrapperSC = styled("div")`
  margin-bottom: 10px;
`;

const ButtonSC = styled("button")<{
  bg: string;
  color: string;
  isActive: boolean;
}>`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  background: ${({ bg }) => `url(${bg})`} center center / contain no-repeat;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  position: relative;
  filter: ${({ isActive, color }) =>
    isActive
      ? `drop-shadow(0px 0px 5px ${color}) drop-shadow(0px 0px 15px ${color}) drop-shadow(0px 0px 25px ${color});`
      : ""};

  &:hover {
    filter: drop-shadow(0px 0px 5px ${({ color }) => color})
      drop-shadow(0px 0px 15px ${({ color }) => color})
      drop-shadow(0px 0px 25px ${({ color }) => color});
  }
`;
const ManaSC = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AttackSC = styled(ManaSC)`
  top: 57%;
  left: 57%;
`;
const HealthSC = styled(ManaSC)`
  top: 58%;
`;

export const SortStatStyle = () => ({
  ManaSC,
  HealthSC,
  AttackSC,
  ButtonSC,
  WrapperSC,
  ContainerSC,
});
