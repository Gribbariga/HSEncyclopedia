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
`;

export const useCardsStyle = () => ({
  ListSC,
  ClassTitle,
  CardsBackgroundSC,
});
