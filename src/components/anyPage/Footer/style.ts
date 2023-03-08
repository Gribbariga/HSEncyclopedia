import styled from "styled-components";

import { Button, TextField } from "@mui/material";
import { mediaQuery } from "@/lib/service/service";

const FooterSC = styled("footer")`
  width: 100%;
  background-color: #000000;
  padding: 15px 0;
`;
const OuterWrapperSC = styled("div")`
  display: flex;
  justify-content: center;
  ${mediaQuery(750)} {
    flex-direction: column;
    align-items: center;
  }
`;
const RightSideWrapperSC = styled("div")`
  max-width: 500px;
  width: 100%;
`;
const AboutMeSC = styled("div")`
  margin: 0 auto;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 15px;
  ${mediaQuery(450)} {
    font-size: 17px;
  }
`;
const SocialWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 210px;
  margin: 0 auto;
`;
const SocialLinkSC = styled("a")`
  width: 72px;
  height: 72px;
`;

export const useFooterStyles = () => ({
  FooterSC,
  AboutMeSC,
  SocialLinkSC,
  OuterWrapperSC,
  SocialWrapperSC,
  RightSideWrapperSC,
});
