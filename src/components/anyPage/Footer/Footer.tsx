import React from "react";
import { userFooterStyles } from "./style";

import Vk from "@/icon/vk.svg";
import Github from "@/icon/Github.svg";
import { ContainerSC } from "../Container/Container";

const Footer = () => {
  return (
    <>
      <FooterSC>
        <ContainerSC maxWidth={1500}>
          <OuterWrapperSC>
            <FormSC>
              <FormTitleSC>Форма обратной связи</FormTitleSC>
              <InputMUI label="Ваше имя" variant="outlined" />
              <InputMUI label="Ваш Телефон" variant="outlined" />
              <InputMUI label="Ваша почта" variant="outlined" />
              <TextAreaMUI multiline={true} rows={7} />
            </FormSC>
            <RightSideWrapperSC>
              <AboutMeSC>
                Проект разработан в учебных целях почта:mormir09@gmail.com
              </AboutMeSC>
              <SocialWrapperSC>
                <SocialLinkSC href="/">
                  <Vk />
                </SocialLinkSC>
                <SocialLinkSC href="/">
                  <Github />
                </SocialLinkSC>
              </SocialWrapperSC>
            </RightSideWrapperSC>
          </OuterWrapperSC>
        </ContainerSC>
      </FooterSC>
    </>
  );
};

const {
  FormSC,
  FooterSC,
  InputMUI,
  AboutMeSC,
  TextAreaMUI,
  FormTitleSC,
  SocialLinkSC,
  OuterWrapperSC,
  SocialWrapperSC,
  RightSideWrapperSC,
} = userFooterStyles();

export default React.memo(Footer);
