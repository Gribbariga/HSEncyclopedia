import styled from "styled-components";

const CardWrapperSC = styled("div")`
  transition: all 0.5s;
  width: 20%;
  transform: perspective(2000px) rotatey(0deg) rotatex(0deg);
  &:hover {
    transform: scale(1.1);
    & > img {
      filter: drop-shadow(0px 0px 5px #cfff88) drop-shadow(0px 0px 15px #30d51e)
        drop-shadow(0px 0px 25px #51ab2a);
    }
  }
`;

const ImageSC = styled("img")`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
`;

export const useCardStyle = () => ({
  ImageSC,
  CardWrapperSC,
});
