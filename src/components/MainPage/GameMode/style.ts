import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

const SectionSC = styled("section")`
  position: relative;
  background-image: url(img/image/GameModeBG.jpg);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 0 0 20px 0px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

const TitleSC = styled("h2")`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
  z-index: 3;
`;
const SwiperSC = styled(Swiper)`
  width: 100%;
  height: 720px;
  z-index: 1000;
`;
const SwiperSlideSC = styled(SwiperSlide)`
  height: 100%;
`;

const SlideWrapperSC = styled("div")<{ BGUrl: string }>`
  background-image: url(${({ BGUrl }) => BGUrl});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  object-fit: cover;
  padding: 40px 20px 20px 20px;
`;

const SlideTitleSC = styled("h3")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 100px;
`;

const OneSlideDescrSC = styled("div")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  width: 60%;
  margin-left: 15px;
`;

const TwoSlideWrapperSC = styled(SlideWrapperSC)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 80px 180px 20px;
`;

const TwoSlideDescrSC = styled(OneSlideDescrSC)`
  width: 70%;
`;

const ThreeSlideDescrSC = styled(TwoSlideDescrSC)`
  width: 40%;
`;

const FourSlideDescrSC = styled(OneSlideDescrSC)`
  width: 40%;
`;
export const useGameModeStyle = () => ({
  TwoSlideWrapperSC,
  ThreeSlideDescrSC,
  FourSlideDescrSC,
  TwoSlideDescrSC,
  OneSlideDescrSC,
  SlideWrapperSC,
  SwiperSlideSC,
  SlideTitleSC,
  SectionSC,
  SwiperSC,
  TitleSC,
});
