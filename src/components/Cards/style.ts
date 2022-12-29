import styled from "styled-components";

const CardsBackgroundSC = styled("div")`
  background-image: url("img/image/CardsBG.jpg");
  background-repeat: round;
`;

const ListSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const useCardsStyle = () => ({
  ListSC,
  CardsBackgroundSC,
});
