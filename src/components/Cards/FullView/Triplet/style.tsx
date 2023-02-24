import styled from "styled-components";

const TripletWrapperSC = styled("div")`
  display: flex;
  align-items: center;
`;

const TripletImgSC = styled("img")`
  margin-right: 10px;
`;

const TextSC = styled("p")`
  color: #ffffff;
`;

const SpanSC = styled("span")`
  cursor: zoom-in;
  margin-left: 10px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: underline;
  position: relative;
  &:hover {
    & > div {
      visibility: visible;
      overflow: visible;
      opacity: 1;
    }
  }
`;

const TripletSC = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  z-index: 9999;
`;

const GoldImgSC = styled("img")`
  width: 220px;
`;

export const useTripletStyle = () => ({
  TextSC,
  SpanSC,
  TripletSC,
  GoldImgSC,
  TripletImgSC,
  TripletWrapperSC,
});
