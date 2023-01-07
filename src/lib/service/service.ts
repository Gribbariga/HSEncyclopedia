export const getCookiesByName = (name: string) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)",
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const mouseLive = (event: React.MouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.transform = "";
};

export const fCardRotate = (event: React.MouseEvent<HTMLDivElement>) => {
  const currentTarget = event.currentTarget;
  const nativeEvent = event.nativeEvent;
  currentTarget.style.transform = `perspective(2000px) scale(1.1) rotatey(${
    (nativeEvent.offsetX - currentTarget.offsetWidth / 2) / 8
  }deg) rotatex(${
    ((nativeEvent.offsetY - currentTarget.offsetHeight / 2) / 8) * -1
  }deg)`;
};
