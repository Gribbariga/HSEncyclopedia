import React from "react";
import { useMainPageStyle } from "./style";

const MainPage = () => {
  return <SectionSC></SectionSC>;
};

const { VideoSC, SectionSC, MainTitleSC, DescriptionSC } = useMainPageStyle();

export default React.memo(MainPage);
