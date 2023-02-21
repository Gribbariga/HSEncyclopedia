import Link from "next/link";
import React from "react";
import { ContainerSC } from "../Container/Container";
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
            <NavLinkSC href={"/"}>Главная</NavLinkSC>
            <LinkNavSC>
              Карты
              <NavListSC>
                <NavListLinkSC href={"/cards/standart"}>
                  Библиотека
                </NavListLinkSC>
                <NavListLinkSC href={"/cards/battlegrounds"}>
                  Поля Сражений
                </NavListLinkSC>
                <NavListLinkSC href={"/cards/mercenaries"}>
                  Наемники
                </NavListLinkSC>
                <NavListLinkSC href={"/"}>Наемники</NavListLinkSC>
                <NavListLinkSC href={"/"}>Наемники</NavListLinkSC>
              </NavListSC>
            </LinkNavSC>
            <NavLinkSC href={"/"}>Обучение</NavLinkSC>
            <NavLinkSC href={"/"}>что то</NavLinkSC>
          </NavMenuSC>
        </WrapperSC>
      </ContainerSC>
    </HeaderSC>
  );
};

const {
  LogoSC,
  NavListSC,
  WrapperSC,
  NavMenuSC,
  LinkNavSC,
  NavLinkSC,
  HeaderSC,
  NavListLinkSC,
} = useHeaderStyles();

export default React.memo(Header);
