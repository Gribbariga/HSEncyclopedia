import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useGameModeStyle } from "./style";
import { ContainerSC } from "@/components/anyPage/Container/Container";

const GameMode = () => {
  return (
    <SectionSC>
      <ContainerSC maxWidth={1280}>
        <SwiperSC
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlideSC>
            <OneSlideWrapperSC />
          </SwiperSlideSC>
          <SwiperSlideSC>Slide 2</SwiperSlideSC>
          <SwiperSlideSC>Slide 3</SwiperSlideSC>
          <SwiperSlideSC>Slide 4</SwiperSlideSC>
        </SwiperSC>
      </ContainerSC>
    </SectionSC>
  );
};

const { OneSlideWrapperSC, SwiperSlideSC, SectionSC, SwiperSC } =
  useGameModeStyle();

export default React.memo(GameMode);
