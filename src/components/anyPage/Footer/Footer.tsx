import React from "react";
import { useFooterStyles } from "./style";

import Vk from "../../../assets/icon/vl.svg";
import Github from "../../../assets/icon/Github.svg";
import { ContainerSC } from "../Container/Container";
import FormFeedback from "./FormFeedback/FormFeedback";

const Footer = () => {
  return (
    <>
      <FooterSC>
        <ContainerSC maxWidth={1500}>
          <OuterWrapperSC>
            <FormFeedback />
            <RightSideWrapperSC>
              <AboutMeSC>
                Проект разработан в учебных целях почта:mormir09@gmail.com
              </AboutMeSC>
              <SocialWrapperSC>
                <SocialLinkSC
                  target={"_blank"}
                  href="https://vk.com/id490763721">
                  <Vk />
                </SocialLinkSC>
                <SocialLinkSC
                  target={"_blank"}
                  href="https://github.com/Gribbariga">
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
  FooterSC,
  AboutMeSC,
  SocialLinkSC,
  OuterWrapperSC,
  SocialWrapperSC,
  RightSideWrapperSC,
} = useFooterStyles();

export default React.memo(Footer);
