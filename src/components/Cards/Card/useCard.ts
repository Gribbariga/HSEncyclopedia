export const useCard = () => {
  const fCardRotate = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget;
    const nativeEvent = event.nativeEvent;
    currentTarget.style.transform = `perspective(2000px) scale(1.1) rotatey(${
      (nativeEvent.offsetX - currentTarget.offsetWidth / 2) / 6
    }deg) rotatex(${
      ((nativeEvent.offsetY - currentTarget.offsetHeight / 2) / 6) * -1
    }deg)`;
  };
  const CardMouseLive = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };

  return { CardMouseLive, fCardRotate };
};
