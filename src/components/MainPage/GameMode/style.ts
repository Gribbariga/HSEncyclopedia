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

const SwiperSlideSC = styled(SwiperSlide)`
  height: 100%;
`;

const OneSlideWrapperSC = styled("div")`
  background-image: url(img/image/MainPageSlideOne.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  object-fit: cover;
  padding: 40px 20px 20px 20px;
`;

const OneSlideTitleSC = styled("h3")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 50px;
`;

const OneSlideDescrSC = styled("div")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  width: 60%;
  margin-left: 15px;
`;

const TwoSlideWrapperSC = styled(OneSlideWrapperSC)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(img/image/MainPageSlideTwo.jpg);
  padding: 40px 80px 180px 20px;
`;

const TwoSlideTitleSC = styled(OneSlideTitleSC)``;

const TwoSlideDescrSC = styled(OneSlideDescrSC)`
  width: 70%;
`;

const SwiperSC = styled(Swiper)`
  width: 100%;
  height: 720px;
  z-index: 1000;
  background-filter: blur(2px);
`;

export const useGameModeStyle = () => ({
  OneSlideWrapperSC,
  TwoSlideWrapperSC,
  TwoSlideDescrSC,
  OneSlideTitleSC,
  TwoSlideTitleSC,
  OneSlideDescrSC,
  SwiperSlideSC,
  SectionSC,
  SwiperSC,
  TitleSC,
});
