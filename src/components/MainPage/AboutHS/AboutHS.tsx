import { ContainerSC } from "@/components/anyPage/Container/Container";
import React from "react";
import { useMainPageStyle } from "./style";

const AboutHS = () => {
  return (
    <SectionSC>
      <VideoWrapperSC>
        <VideoSC
          src="video/homepage_header_video.webm"
          autoPlay={true}
          loop={true}
          muted={true}
        />
        <ContainerSC>
          <MainTitleSC>
            Обманчиво простая и невероятно интересная игра
          </MainTitleSC>
          <DescriptionSC>
            Hearthstone: Heroes of Warcraft — компьютерная коллекционная
            карточная онлайн-игра по мотивам вселенной Warcraft, разработанная
            Blizzard Entertainment.
          </DescriptionSC>
        </ContainerSC>
      </VideoWrapperSC>
      <BlurSC />
    </SectionSC>
  );
};

const {
  BlurSC,
  VideoSC,
  SectionSC,
  MainTitleSC,
  DescriptionSC,
  VideoWrapperSC,
} = useMainPageStyle();

export default React.memo(AboutHS);
