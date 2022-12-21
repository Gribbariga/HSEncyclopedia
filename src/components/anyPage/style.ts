import styled from "styled-components";

const FooterSC = styled("footer")`
  width: 100%;
  background-color: #000000;
  padding: 15px 0;
`;
const AboutMeSC = styled("div")`
  margin: 0 auto;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  max-width: 500px;
  text-align: center;
  margin-bottom: 15px;
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

export const userFooterStyles = () => ({
  FooterSC,
  AboutMeSC,
  SocialLinkSC,
  SocialWrapperSC,
});
