import styled from "styled-components";

const NewsTitleSC = styled("h1")`
  color: #fdfdfd;
  font-size: 35px;
  text-align: center;
  margin-bottom: 20px;
`;

const NewsImgSC = styled("img")`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

const NewsTextSC = styled("div")`
  font-size: 16px;
  color: #fdfdfd;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  & > p {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & > h4 {
    font-size: 24px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  & > h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  & > h5 {
    font-size: 26px;
    margin-bottom: 10px;
  }
  & > ul {
    list-style: disc;

    & > li {
      list-style: disc;
      margin-bottom: 10px;
      font-size: 24px;
      & > a {
        margin-right: 5px;
        margin-left: 5px;
        font-weight: 700;
        text-decoration: underline;
      }
      & > ul {
        margin-left: 20px;
        & > li {
          margin-bottom: 10px;
          list-style: disc;
        }
      }
    }
  }
`;

export const newPageStyle = () => ({
  NewsImgSC,
  NewsTextSC,
  NewsTitleSC,
});
