import React, { FC } from "react";
import { useTripletStyle } from "./style";
import { useTriplet } from "./useTriplet";

interface ITripletProps {
  Title: string;
  upgradeId: number;
}

const Triplet: FC<ITripletProps> = ({ Title, upgradeId }) => {
  const { goldCard } = useTriplet(upgradeId);
  console.log(goldCard);
  return (
    <TripletWrapperSC>
      <TripletImgSC src="/img/image/anyPage/cardFullView/Triplet.png" />
      <TextSC>
        Тройная карта:
        <SpanSC>
          {Title}
          <TripletSC>
            <GoldImgSC src={goldCard?.battlegrounds?.imageGold} />
          </TripletSC>
        </SpanSC>
      </TextSC>
    </TripletWrapperSC>
  );
};

const { TextSC, SpanSC, TripletSC, GoldImgSC, TripletImgSC, TripletWrapperSC } =
  useTripletStyle();

export default React.memo(Triplet);
