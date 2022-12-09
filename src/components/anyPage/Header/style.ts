import Link from "next/link";
import styled from "styled-components";

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: url(/img/image/headerBG.png);
`;
const WrapperSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSC = styled("img")`
  width: 60px;
  height: 60px;
`;

const NavMenuSC = styled("nav")`
  display: flex;
  max-width: 700px;
  width: 100%;
  justify-content: space-between;
`;

const LinkNavSC = styled(Link)`
  color: #fcd144;
  font-size: 20px;
`;

export const useHeaderStyles = () => ({
  WrapperSC,
  NavMenuSC,
  LinkNavSC,
  HeaderSC,
  LogoSC,
});
