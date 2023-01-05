import { useState } from "react";

export const useCard = () => {
  const [isFullView, setIsFullView] = useState(false);

  const fCardRotate = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget;
    const nativeEvent = event.nativeEvent;
    currentTarget.style.transform = `perspective(2000px) scale(1.1) rotatey(${
      (nativeEvent.offsetX - currentTarget.offsetWidth / 2) / 8
    }deg) rotatex(${
      ((nativeEvent.offsetY - currentTarget.offsetHeight / 2) / 8) * -1
    }deg)`;
  };
  const CardMouseLive = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };
  const handlerClick = () => {
    setIsFullView((prev) => !prev);
  };

  return { CardMouseLive, handlerClick, isFullView, fCardRotate };
};
