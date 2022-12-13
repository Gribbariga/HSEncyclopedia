import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useGameModeStyle } from "./style";
import { ContainerSC } from "@/components/anyPage/Container/Container";

const GameMode = () => {
  return (
    <SectionSC>
      <ContainerSC maxWidth={1280}>
        <TitleSC>Игровые режимы</TitleSC>
        <SwiperSC
          slidesPerView={1}
          spaceBetween={150}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlideSC>
            <OneSlideWrapperSC>
              <OneSlideTitleSC>Стандартный</OneSlideTitleSC>
              <OneSlideDescrSC>
                Стандартный формат предоставляет классический геймплей игр жанра
                ККИ с увлекательными механиками.
              </OneSlideDescrSC>
            </OneSlideWrapperSC>
          </SwiperSlideSC>
          <SwiperSlideSC>
            <TwoSlideWrapperSC>
              <TwoSlideTitleSC>Арена</TwoSlideTitleSC>
              <TwoSlideDescrSC>
                Купите билет на арену, соберите колоду, выбирая по одной карте
                из трех, и сражайтесь против других игроков в турнирном формате
                за шанс выиграть достойную награду.
              </TwoSlideDescrSC>
            </TwoSlideWrapperSC>
          </SwiperSlideSC>
          <SwiperSlideSC>Slide 3</SwiperSlideSC>
          <SwiperSlideSC>Slide 4</SwiperSlideSC>
        </SwiperSC>
      </ContainerSC>
    </SectionSC>
  );
};

const {
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
} = useGameModeStyle();

export default React.memo(GameMode);
