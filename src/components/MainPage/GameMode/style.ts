import { mediaQuery } from "@/lib/service/service";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

const SectionSC = styled("section")`
  position: relative;
  background-image: url(/img/image/GameModeBG.jpg);
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
  ${mediaQuery(450)} {
    font-size: 30px;
  }
`;
const SwiperSC = styled(Swiper)`
  width: 100%;
  height: 720px;
  z-index: 1000;
  ${mediaQuery(1024)} {
    height: 600px;
  }
  ${mediaQuery(850)} {
    height: 480px;
  }
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
  user-select: none;
`;

const SlideTitleSC = styled("h3")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 100px;
  ${mediaQuery(720)} {
    margin-bottom: 30px;
    font-size: 30px;
  }
  ${mediaQuery(600)} {
    margin-bottom: 10px;
    font-size: 25px;
  }
`;

const OneSlideDescrSC = styled("p")`
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  width: 60%;
  margin-left: 15px;
  ${mediaQuery(1024)} {
    font-size: 25px;
  }
  ${mediaQuery(600)} {
    font-size: 20px;
  }
`;

const TwoSlideWrapperSC = styled(SlideWrapperSC)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 80px 180px 20px;
`;

const TwoSlideDescrSC = styled(OneSlideDescrSC)`
  width: 70%;
  ${mediaQuery(450)} {
    width: 90%;
  }
`;

const ThreeSlideDescrSC = styled(TwoSlideDescrSC)`
  width: 40%;
  ${mediaQuery(1024)} {
    width: 65%;
  }
  ${mediaQuery(450)} {
    width: 80%;
  }
`;

const FourSlideDescrSC = styled(OneSlideDescrSC)`
  width: 40%;
  ${mediaQuery(900)} {
    width: 70%;
  }
  ${mediaQuery(450)} {
    width: 90%;
  }
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
