import styled from "styled-components";

const WrapperSC = styled("div")`
  max-width: 800px;
  height: 600px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CardWrapperSC = styled("div")`
  cursor: pointer;
  transition: all 0.5s;
  width: 350px;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  &:hover {
    transform: scale(1.01, 1.01, 1.01);
  }
`;

const CardPerspectiveSC = styled("div")`
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  &:hover {
    & > img {
      /* filter: drop-shadow(0px 0px 5px #cfff88) drop-shadow(0px 0px 15px #30d51e)
        drop-shadow(0px 0px 25px #51ab2a); */
    }
  }
`;

const ImageSC = styled("img")`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
`;

const RightSizeSC = styled("div")`
  padding-top: 50px;
  width: 450px;
`;

const TitleSC = styled("h3")`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
`;

const DescriptionSC = styled("p")`
  font-style: italic;
  color: rgb(255, 255, 255);
  opacity: 0.5;
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardEffectSC = styled("p")`
  color: #ffffff;
  margin-bottom: 10px;
  & > b {
    color: #f7d057;
  }
`;

const ArrowWrapperSC = styled("div")<{ side: "left" | "right" }>`
  ${({ side }) => side}: -150px;
  position: absolute;
  width: 120px;
  height: 120px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;

const ArrowImgSC = styled("img")<{ isTransform?: boolean }>`
  ${({ isTransform }) => (isTransform ? "transform: rotate(180deg)" : "")}
`;

export const useFullViewStyle = () => ({
  ImageSC,
  TitleSC,
  WrapperSC,
  ArrowImgSC,
  RightSizeSC,
  CardEffectSC,
  CardWrapperSC,
  DescriptionSC,
  ArrowWrapperSC,
  CardPerspectiveSC,
});
