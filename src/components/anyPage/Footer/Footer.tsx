import React from "react";
import { userFooterStyles } from "../style";

import Vk from "@/icon/vk.svg";
import Github from "@/icon/Github.svg";

const Footer = () => {
  return (
    <>
      <FooterSC>
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
      </FooterSC>
    </>
  );
};

const { FooterSC, AboutMeSC, SocialLinkSC, SocialWrapperSC } =
  userFooterStyles();

export default React.memo(Footer);
