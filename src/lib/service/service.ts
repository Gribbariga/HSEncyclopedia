export const getCookiesByName = (name: string) => {
  if (typeof window !== "undefined") {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)",
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : "no token";
  }
};

export const mouseLive = (event: React.MouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.transform = "";
};

export const fCardRotate = (event: React.MouseEvent<HTMLDivElement>) => {
  const currentTarget = event.currentTarget;
  const nativeEvent = event.nativeEvent;
  currentTarget.style.transform = `perspective(2000px) scale(1.035) rotatey(${
    (nativeEvent.offsetX - currentTarget.offsetWidth / 2) / 8
  }deg) rotatex(${
    ((nativeEvent.offsetY - currentTarget.offsetHeight / 2) / 8) * -1
  }deg)`;
};

export const throttle = (callee: () => void, timeout: number) => {
  let timer: NodeJS.Timeout | null;

  return function perform() {
    if (timer) return;

    timer = setTimeout(() => {
      callee();
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }, timeout);
  };
};

export const checkPosition = (
  offset: number,
  blocking: boolean,
  action: () => void,
) => {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  const scrolled = window.scrollY;

  const threshold = height - screenHeight / 4;

  const position = scrolled + screenHeight;

  if (position >= threshold - offset) {
    if (!blocking) {
      console.log(1);
      action();
    }
  }
};

export const checkIsNumber = (value: string) => {
  const reg = /^\d+$/;
  return value.search(reg) != -1;
};

export const mediaQuery = (size: string | number) => {
  return `@media (max-width: ${size}px)`;
};
