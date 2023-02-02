import { IClasses } from "@/lib/models/metaModel";
import { Hidden } from "@mui/material";
import React, { FC } from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import Spinner from "../anyPage/Spinner/Spinner";
import Card from "./Card/Card";
import FullView from "./FullView/FullView";
import { useCardsStyle } from "./style";
import { useCards } from "./useCards";

interface ICardsProps {
  gameMode: "standard" | "bg" | "mercenary";
}

const Cards: FC<ICardsProps> = ({ gameMode }) => {
  const { cards, classes, loading, fullView, currentCard, handlerClick } =
    useCards(gameMode);
  return (
    <>
      <CardsBackgroundSC>
        <ContainerSC>
          <ListSC>
            {currentCard.map((item, i, arr) => {
              if (i == 0) {
                let title: IClasses | undefined;
                if (classes) {
                  title = classes.find(
                    (item) => item.id === arr[i + 1].classId,
                  );
                }
                return (
                  <>
                    <ClassTitle key={title?.name}>{title?.name}</ClassTitle>
                    <Card
                      openFullView={handlerClick}
                      key={item.id}
                      card={item}
                      index={i}
                    />
                  </>
                );
              }
              if (!item.isEndCards) {
                return (
                  <Card
                    openFullView={handlerClick}
                    key={item.id}
                    card={item}
                    index={i}
                  />
                );
              } else {
                let title: IClasses | undefined;
                if (classes) {
                  title = classes.find(
                    (item) => item.id === arr[i + 1].classId,
                  );
                }
                return (
                  <>
                    <Card
                      openFullView={handlerClick}
                      key={item.id}
                      card={item}
                      index={i}
                    />
                    <ClassTitle key={title?.name}>{title?.name}</ClassTitle>
                  </>
                );
              }
            })}
          </ListSC>
          {loading && <Spinner />}
        </ContainerSC>
      </CardsBackgroundSC>
      <FullView
        cardIndex={fullView.index}
        isActive={fullView.isActive}
        setActive={handlerClick}
      />
    </>
  );
};

const { ListSC, ClassTitle, CardsBackgroundSC } = useCardsStyle();

export default React.memo(Cards);
