import styled from "styled-components";

const CardWrapperSC = styled("div")`
  cursor: pointer;
  transition: all 0.5s;
  width: 20%;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  &:hover {
    transform: scale(1.035, 1.035, 1.035);
  }
`;

const CardPerspectiveSC = styled("div")`
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  &:hover {
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
  CardPerspectiveSC,
});
