import styled from "styled-components";

const KeyWordsListSC = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0;
  justify-content: center;
`;

const KeyWordsWrapperSC = styled("div")`
  background: url(/img/image/anyPage/cardFullView/keyWordsBG.png) no-repeat;
  padding: 9px;
  background-size: 100%;
  width: 228px;
  height: 146px;
  margin-bottom: 10px;
  margin-right: 15px;
`;

const KeyWordsTitleSC = styled("h4")`
  color: #ffffff;
  margin-bottom: 15px;
`;

const KeyWordsTextSC = styled("p")`
  color: #ffffff;
`;

export const useKeyWordsStyle = () => ({
  KeyWordsListSC,
  KeyWordsTextSC,
  KeyWordsTitleSC,
  KeyWordsWrapperSC,
});
