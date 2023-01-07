import { useState } from "react";

export const useCard = () => {
  const [isFullView, setIsFullView] = useState(false);

  const handlerClick = () => {
    setIsFullView((prev) => !prev);
  };

  return { handlerClick, isFullView };
};
