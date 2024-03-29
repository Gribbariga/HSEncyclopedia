import { Button, TextField } from "@mui/material";
import styled from "styled-components";

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
  transition: all 0.5s;
  margin: 0 0 ${(prop) => (prop.error ? "5px" : "25px")} 0 !important;

  & > .MuiFormLabel-root {
    color: ${(prop) => (prop.error ? "#FF0000" : "#ffffff")} !important;
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
      border-color: ${(prop) =>
        prop.error ? "#FF0000" : "#ffffff"} !important;
    }
  }
`;

const ErrorInputTextSC = styled("p")<{ isVisible: boolean }>`
  transition: all 0.5s;

  color: #ff0000;
  margin-bottom: ${({ isVisible }) => (isVisible ? "25px" : "0px")};
  ${({ isVisible }) => {
    return isVisible
      ? `visibility: visible;
    opacity: 1;
    overflow: visible;`
      : `visibility: hidden;
    opacity: 0;
    overflow: hidden;`;
  }}
  margin-left: 10px;
`;

const TextAreaMUI = styled(TextField)`
  margin: 0 0 10px 0 !important;
  & > .MuiFormLabel-root {
    color: #ffffff !important;
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

        background-color: #ffffff !important; /* цвет плашки */
        border-radius: 20px; /* закругления плашки */
      }
      padding: 5px 7px;
      color: #ffffff !important;
      border-radius: 20px;
    }

    & > .MuiOutlinedInput-notchedOutline {
      border-color: #ffffff !important;
    }
  }
`;

const SubmitButtonSC = styled(Button)`
  background-color: #3e75c3;
  margin-bottom: 15px;
`;

export const useFormFeedbackStyles = () => ({
  FormSC,
  InputMUI,
  TextAreaMUI,
  FormTitleSC,
  SubmitButtonSC,
  ErrorInputTextSC,
});
