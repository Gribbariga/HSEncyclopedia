import styled from "styled-components";

const SectionSC = styled("section")`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 250px;
  overflow: hidden;
`;

const VideoWrapperSC = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 150px;
`;

const VideoSC = styled("video")`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate3d(-50%, 0px, 0px);
  max-width: none;
  margin: auto;
  object-fit: cover;
  filter: hue-rotate(200deg);
`;

const MainTitleSC = styled("h1")`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  max-width: 600px;
`;

const DescriptionSC = styled("p")`
  color: #ffffff;
  font-size: 30px;
  max-width: 800px;
  margin-left: 40px;
`;

const BlurSC = styled("div")`
  position: absolute;
  bottom: -24px;
  left: -6px;
  filter: blur(5px);
  height: 60px;
  width: 106%;
  background-image: url(img/image/GameModeBG.jpg);
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

export const useMainPageStyle = () => ({
  BlurSC,
  VideoSC,
  SectionSC,
  MainTitleSC,
  DescriptionSC,
  VideoWrapperSC,
});
