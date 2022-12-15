import React from "react";
import { Autoplay } from "swiper";
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
          modules={[Autoplay]}
          speed={900}
          slidesPerView={1}
          spaceBetween={150}
          autoplay={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}>
          <SwiperSlideSC>
            <SlideWrapperSC BGUrl={"img/image/MainPageSlideOne.jpg"}>
              <SlideTitleSC>Стандартный</SlideTitleSC>
              <OneSlideDescrSC>
                Стандартный формат предоставляет классический геймплей игр жанра
                ККИ с увлекательными механиками.
              </OneSlideDescrSC>
            </SlideWrapperSC>
          </SwiperSlideSC>
          <SwiperSlideSC>
            <TwoSlideWrapperSC BGUrl="img/image/MainPageSlideTwo.jpg">
              <SlideTitleSC>Арена</SlideTitleSC>
              <TwoSlideDescrSC>
                Купите билет на арену, соберите колоду, выбирая по одной карте
                из трех, и сражайтесь против других игроков в турнирном формате
                за шанс выиграть достойную награду.
              </TwoSlideDescrSC>
            </TwoSlideWrapperSC>
          </SwiperSlideSC>
          <SwiperSlideSC>
            <SlideWrapperSC BGUrl="img/image/MainPageSlideThree.jpg">
              <SlideTitleSC>Поля сражений</SlideTitleSC>
              <ThreeSlideDescrSC>
                В режиме «Поля сражений» вам и 7 другим игрокам предстоит
                выбрать одного из героев, уже знакомых вам по Hearthstone,
                собрать мощный отряд из нанятых в таверне существ и сражаться в
                боях до тех пор, пока один игрок не выйдет из сражения
                победителем!
              </ThreeSlideDescrSC>
            </SlideWrapperSC>
          </SwiperSlideSC>
          <SwiperSlideSC>
            <SlideWrapperSC BGUrl="img/image/MainPageSlideFour.jpg">
              <SlideTitleSC>Наёмники</SlideTitleSC>
              <FourSlideDescrSC>
                Выполняйте поручения в режиме для одного игрока или сражайтесь с
                оппонентами на арене! Вербуйте наемников, создавая различные
                комбинации и сочетая сильные стороны бойцов. Сила ваших
                наемников растет благодаря сохраняющемуся прогрессу в каждом из
                режимов!
              </FourSlideDescrSC>
            </SlideWrapperSC>
          </SwiperSlideSC>
        </SwiperSC>
      </ContainerSC>
    </SectionSC>
  );
};

const {
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
} = useGameModeStyle();

export default React.memo(GameMode);
