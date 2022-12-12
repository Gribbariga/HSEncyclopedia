import React from "react";
import AboutHS from "./AboutHS/AboutHS";
import GameMode from "./GameMode/GameMode";

const MainPage = () => {
  return (
    <>
      <AboutHS />
      <GameMode />
    </>
  );
};

export default React.memo(MainPage);
