import Select from "@/components/UI/Select/Select";
import styled from "styled-components";
import { css } from "styled-components";

const SelectCSS = css`
  & > .MuiInputBase-root {
    height: 50px;
    border-radius: 100px;
    width: 250px;
    color: #000;
    background: url("/img/image/cards-page/filter/selectBG.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
const SelectMenuCSS = css`
  background: red;
`;

const BackgroundSC = styled("div")`
  background-image: url("/img/image/cards-page/filter/filterBG.jpg");
`;

const FormSC = styled("form")`
  padding: 20px 0 20px 0;
  min-height: 200px;
  width: 100%;
`;

export const useFilterStyle = () => ({
  FormSC,
  SelectCSS,
  BackgroundSC,
  SelectMenuCSS,
});
