import React, { FC } from "react";
import Filter from "./Filter/Filter";
import Cards from "../Cards/Cards";

interface ICardPage {
  gameMode: "standard" | "bg" | "mercenary";
}

const CardsPage: FC<ICardPage> = ({ gameMode }) => {
  return (
    <>
      <Filter />
      <Cards gameMode={gameMode} />
    </>
  );
};

export default CardsPage;
