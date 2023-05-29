import styled from "styled-components";

const TitleSC = styled("h4")`
  color: #ffffff;
`;

const SpanSC = styled("span")`
  cursor: zoom-in;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: underline;
  position: relative;
  &:hover {
    & > div {
      visibility: visible;
      overflow: visible;
      opacity: 1;
    }
  }
`;

const CardsWrapperSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const CardSC = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -110%);
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  z-index: 9999;
`;

const CardImgSC = styled("img")`
  width: 220px;
`;

export const useStyleRelatedCards = () => ({
  SpanSC,
  CardSC,
  TitleSC,
  CardImgSC,
  CardsWrapperSC,
});
