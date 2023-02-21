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
            <>
              {currentCard[0] && (
                <>
                  <ClassTitle>{currentCard[0].title}</ClassTitle>
                  <Card
                    openFullView={handlerClick}
                    card={currentCard[0]}
                    index={0}
                    gameMode={gameMode}
                  />
                  {currentCard.map((item, i, arr) => {
                    if (i !== 0) {
                      if (item.title !== arr[i - 1].title) {
                        return (
                          <>
                            <ClassTitle key={item.title}>
                              {item.title}
                            </ClassTitle>
                            <Card
                              openFullView={handlerClick}
                              key={item.id}
                              card={item}
                              index={i}
                              gameMode={gameMode}
                            />
                          </>
                        );
                      } else {
                        return (
                          <Card
                            openFullView={handlerClick}
                            key={item.id}
                            card={item}
                            index={i}
                            gameMode={gameMode}
                          />
                        );
                      }
                    }
                  })}
                </>
              )}
            </>
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
