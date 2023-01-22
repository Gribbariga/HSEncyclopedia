import styled from "styled-components";

const CardsBackgroundSC = styled("div")`
  background-image: url("img/image/CardsBG.jpg");
  padding-bottom: 60px;
  min-height: 100vh;
`;

const ListSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
const ClassTitle = styled("h2")`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 35px;
`;

export const useCardsStyle = () => ({
  ListSC,
  ClassTitle,
  CardsBackgroundSC,
});
