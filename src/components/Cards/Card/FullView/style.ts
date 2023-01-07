import styled from "styled-components";

const WrapperSC = styled("div")`
  max-width: 800px;
  height: 600px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
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

const CardEffectSC = styled("p")``;

const InfoListSC = styled("ul")``;

const ListItemSC = styled("li")`
  color: #ffffff;
  margin-bottom: 5px;
  & > span {
    color: #ffe5ac;
  }
`;

export const useFullViewStyle = () => ({
  ImageSC,
  TitleSC,
  WrapperSC,
  InfoListSC,
  ListItemSC,
  RightSizeSC,
  CardEffectSC,
  CardWrapperSC,
  DescriptionSC,
  CardPerspectiveSC,
});
