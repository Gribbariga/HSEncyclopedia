import Link from "next/link";

const { default: styled } = require("styled-components");

const NewsMainTitleSC = styled("h1")`
  font-size: 25px;
  color: #fdfdfd;
`;

const NewsWrapperSC = styled("div")`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  gap: 10px;
  min-height: 100vh;
  padding: 20px 0;
`;

const NewsItemSC = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #000;
`;

const NewsTitleSC = styled("h2")`
  font-size: 20px;
  color: #fdfdfd;
`;

const DataCreateSC = styled("span")`
  font-size: 20px;
  color: #fdfdfd;
`;

export const styleNewsPage = () => ({
  NewsItemSC,
  NewsTitleSC,
  DataCreateSC,
  NewsWrapperSC,
  NewsMainTitleSC,
});
