import { IClasses } from "@/lib/models/metaModel";
import { Hidden } from "@mui/material";
import React from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import Card from "./Card/Card";
import FullView from "./FullView/FullView";
import { useCardsStyle } from "./style";
import { useCards } from "./useCards";

const Cards = () => {
  const { cards, classes, fullView, currentCard, handlerClick } = useCards();
  return (
    <>
      <CardsBackgroundSC>
        <ContainerSC>
          <ListSC>
            {currentCard.map((item, i, arr) => {
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
                    <ClassTitle style={{ width: "100%" }}>
                      {title?.name}
                    </ClassTitle>
                  </>
                );
              }
            })}
          </ListSC>
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
