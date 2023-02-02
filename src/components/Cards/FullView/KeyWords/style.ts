import styled from "styled-components";

const KeyWordsWrapperSC = styled("div")``;

const KeyWordsTitleSC = styled("h4")`
  color: #ffffff;
  font-size: 21px;
  margin-bottom: 7px;
`;

const KeyWordsListSC = styled("ul")`
  display: flex;
`;

const KeyWordsItemSC = styled("li")`
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  margin-right: 15px;
  text-decoration: underline;
  cursor: zoom-in;
  position: relative;
  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
      overflow: visible;
    }
  }
`;
const FullViewWrapperSC = styled("div")`
  position: absolute;
  top: -180px;
  min-width: 200px;
  z-index: 7000;
  background: url(/img/image/anyPage/cardFullView/keyWordsBG.png) no-repeat;
  background-size: 100% 100%;
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
`;

const FullViewTitleSC = styled("h5")`
  font-size: 20px;
  margin-bottom: 5px;
`;

const FullViewTextSC = styled("p")``;

export const useKeyWordsStyle = () => ({
  KeyWordsItemSC,
  KeyWordsListSC,
  FullViewTextSC,
  KeyWordsTitleSC,
  FullViewTitleSC,
  KeyWordsWrapperSC,
  FullViewWrapperSC,
});
