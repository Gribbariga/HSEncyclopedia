import { useState } from "react";

export const useCard = (openFullView: (index: number | null) => void) => {
  const handlerFullView = (index: number | null) => {
    return () => openFullView(index);
  };

  return { handlerFullView };
};
