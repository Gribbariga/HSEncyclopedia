import { mediaQuery } from "@/lib/service/service";

import Image from "next/image";

import styled from "styled-components";
const CardWrapperSC = styled("div")<{
  gameMode: "standard" | "bg" | "mercenary";
}>`
  cursor: pointer;
  transition: all 0.5s;
  width: ${({ gameMode }) => (gameMode === "standard" ? "20%" : "15%")};
  ${({ gameMode }) => gameMode === "bg" && "margin-right:15px"};
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  &:hover {
    transform: scale(1.035, 1.035, 1.035);
  }
  ${mediaQuery(1024)} {
    width: ${({ gameMode }) => (gameMode === "standard" ? "25%" : "15%")};
  }
  ${mediaQuery(760)} {
    width: ${({ gameMode }) => (gameMode === "standard" ? "33%" : "15%")};
  }
  ${mediaQuery(600)} {
    width: ${({ gameMode }) => (gameMode === "standard" ? "50%" : "15%")};
  }
  ${mediaQuery(400)} {
    width: ${({ gameMode }) => (gameMode === "standard" ? "100%" : "15%")};
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

const ImageSC = styled(Image)`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
`;

export const useCardStyle = () => ({
  ImageSC,
  CardWrapperSC,
  CardPerspectiveSC,
});
