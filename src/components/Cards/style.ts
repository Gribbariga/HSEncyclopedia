import styled from "styled-components";

const CardsBackgroundSC = styled("div")`
  background-image: url("/img/image/CardsBG.jpg");
  padding-bottom: 60px;
  min-height: 100vh;
`;

const ListSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ClassTitle = styled("h2")`
  position: relative;
  margin: 0 auto;
  color: #050301;
  text-align: center;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 35px;
  &::after,
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000000;
    height: 3px;
    width: 33%;
  }
  &::after {
    right: 0;
  }
  &::before {
    left: 0;
  }
`;

export const useCardsStyle = () => ({
  ListSC,
  ClassTitle,
  CardsBackgroundSC,
});
