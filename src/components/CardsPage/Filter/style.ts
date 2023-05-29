import Select from "@/components/UI/Select/Select";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { css } from "styled-components";

const SelectClassCSS = css`
  & > .MuiInputBase-root {
    height: 50px;
    border-radius: 100px;
    width: 250px;
    color: #000;
    background: url("/img/image/cards-page/filter/selectBG.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    & > .MuiSelect-select {
      color: #ffc300;
      font-size: 18px;
    }
    & > .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`;
const SelectFormatCSS = css`
  ${SelectClassCSS}
  & > .MuiInputBase-root {
    width: 350px;
    margin-right: 12px;
  }
`;

const SelectMenuCSS = css`
  background: red;
`;

const BackgroundSC = styled("div")`
  /* position: sticky;
  top: 60px;
  z-index: 8000; */

  background-image: url("/img/image/cards-page/filter/filterBG.jpg");
`;

const FormSC = styled("form")`
  padding: 20px 0 20px 0;
  min-height: 200px;
  width: 100%;
`;
const TopWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const SelectWrapperSC = styled("div")``;

const SearchWrapperSC = styled("div")``;

const SearchButtonSC = styled("button")`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
`;

const SearchInput = styled(TextField)`
  & > .MuiInputBase-root {
    margin-right: 7px;
    width: 180px;
    height: 50px;
    border-radius: 100px;
    background-color: #ffffff;
    & > .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`;

export const useFilterStyle = () => ({
  FormSC,
  SearchInput,
  TopWrapperSC,
  BackgroundSC,
  SelectMenuCSS,
  SelectClassCSS,
  SearchButtonSC,
  SelectWrapperSC,
  SearchWrapperSC,
  SelectFormatCSS,
});
