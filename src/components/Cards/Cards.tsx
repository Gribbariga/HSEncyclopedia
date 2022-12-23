import { Hidden } from "@mui/material";
import React from "react";
import { ContainerSC } from "../anyPage/Container/Container";
import { useCardsStyle } from "./style";
import { useCards } from "./useCards";

const Cards = () => {
  const { cards } = useCards();
  console.log(cards);
  return (
    <ContainerSC>
      <ListSC>
        {cards.map((item) => {
          return (
            <div style={{ width: "20%" }}>
              <img style={{ width: "100%", height: "100%" }} src={item.image} />
            </div>
          );
        })}
      </ListSC>
    </ContainerSC>
  );
};

const { ListSC } = useCardsStyle();

export default React.memo(Cards);
