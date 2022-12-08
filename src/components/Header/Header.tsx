import Link from "next/link";
import React from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import { useHeaderStyles } from "./style";

const Header = () => {
  return (
    <HeaderSC>
      <ContainerSC maxWidth={1500}>
        <WrapperSC>
          <Link href={"/"}>
            <LogoSC src={"/img/image/Logo.png"} />
          </Link>
          <NavMenuSC>
            <LinkNavSC href={"/"}>Главная</LinkNavSC>
            <LinkNavSC href={"/"}>Карты</LinkNavSC>
            <LinkNavSC href={"/"}>Обучение</LinkNavSC>
            <LinkNavSC href={"/"}>что то</LinkNavSC>
          </NavMenuSC>
        </WrapperSC>
      </ContainerSC>
    </HeaderSC>
  );
};

const { WrapperSC, NavMenuSC, LinkNavSC, HeaderSC, LogoSC } = useHeaderStyles();

export default React.memo(Header);
