import { mediaQuery } from "@/lib/service/service";
import Link from "next/link";
import styled from "styled-components";

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  width: 100%;

  background: url(/img/image/headerBG.png);
  z-index: 9999;
`;
const WrapperSC = styled("div")`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSC = styled("img")`
  width: 60px;
  height: 60px;
`;

const NavMenuSC = styled("nav")`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  width: 100%;
`;

const LinkNavSC = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s;
  color: #fcd144;
  height: 100%;
  font-size: 20px;
  padding: 30px;
  & > div {
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }
  ${mediaQuery(500)} {
    font-size: 16px;
    padding: 15px;
  }
`;

const NavListSC = styled("div")`
  padding: 30px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  top: 60px;
  background-color: #2c0903;
`;
const NavLinkSC = styled(Link)`
  font-size: 20px;
  color: #fcd144;
  ${mediaQuery(500)} {
    font-size: 16px;
  }
`;
const NavListLinkSC = styled(NavLinkSC)`
  width: 200px;
  margin-bottom: 20px;
`;

export const useHeaderStyles = () => ({
  LogoSC,
  NavListSC,
  WrapperSC,
  NavMenuSC,
  LinkNavSC,
  NavLinkSC,
  HeaderSC,
  NavListLinkSC,
});
