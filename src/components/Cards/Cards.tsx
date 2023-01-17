import { Hidden } from "@mui/material";
import React from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import Card from "./Card/Card";
import { useCardsStyle } from "./style";
import { useCards } from "./useCards";

const Cards = () => {
  const { cards } = useCards();
  return (
    <CardsBackgroundSC>
      <ContainerSC>
        <ListSC>
          {cards.map((item) => {
            return <Card key={item.id} card={item} />;
          })}
        </ListSC>
      </ContainerSC>
    </CardsBackgroundSC>
  );
};

const { ListSC, CardsBackgroundSC } = useCardsStyle();

export default React.memo(Cards);
