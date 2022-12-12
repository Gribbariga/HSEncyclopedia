import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

const SectionSC = styled("section")`
  position: relative;
  background-image: url(img/image/GameModeBG.jpg);

  //   &:after {
  //     content: "";
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     background: rgba(0, 0, 0, 0.5);
  //     z-index: 2;
  //   }
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
`;

const SwiperSC = styled(Swiper)`
  width: 100%;
  height: 720px;
  z-index: 1000;
  background-filter: blur(2px);
`;

export const useGameModeStyle = () => ({
  OneSlideWrapperSC,
  SwiperSlideSC,
  SectionSC,
  SwiperSC,
});
