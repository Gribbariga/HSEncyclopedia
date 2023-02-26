import styled from "styled-components";

import { Button, TextField } from "@mui/material";

const FooterSC = styled("footer")`
  width: 100%;
  background-color: #000000;
  padding: 15px 0;
`;
const OuterWrapperSC = styled("div")`
  display: flex;
  justify-content: center;
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

const FormSC = styled("form")`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

const FormTitleSC = styled("h3")`
  margin: 0 auto;
  color: #ffffff;
  font-size: 26px;
  margin-bottom: 15px;
`;

const InputMUI = styled(TextField)`
  margin-bottom: 25px;
  & > .MuiFormLabel-root {
    color: #ffffff;
    top: -7px;
  }
  & > .MuiInputBase-root {
    height: 40px;
    border-radius: 20px;
    & > .MuiInputBase-input {
      padding: 5px 7px;
      color: #ffffff;
      border-radius: 20px;
    }
    & > .MuiOutlinedInput-notchedOutline {
      border-color: #ffffff;
    }
  }
`;

const TextAreaMUI = styled(TextField)`
  margin-bottom: 10px;
  & > .MuiFormLabel-root {
    color: #ffffff;
    top: -7px;
  }
  & > .MuiInputBase-root {
    border-radius: 10px;
    & > .MuiInputBase-input {
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 20px; /* закругления плашки */
        background: grey; /* цвет дорожки */
      }
      &::-webkit-scrollbar-thumb {
        width: 10px;

        background-color: #ffffff; /* цвет плашки */
        border-radius: 20px; /* закругления плашки */
      }
      padding: 5px 7px;
      color: #ffffff;
      border-radius: 20px;
    }
    & > .MuiOutlinedInput-notchedOutline {
      border-color: #ffffff;
    }
  }
`;

const SubmitButtonSC = styled(Button)`
  background-color: #3e75c3;
`;

export const userFooterStyles = () => ({
  FormSC,
  FooterSC,
  InputMUI,
  AboutMeSC,
  TextAreaMUI,
  FormTitleSC,
  SocialLinkSC,
  OuterWrapperSC,
  SubmitButtonSC,
  SocialWrapperSC,
  RightSideWrapperSC,
});
