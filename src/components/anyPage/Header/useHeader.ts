import { useMyMediaQuery } from "../../../hooks/useMediaQuery";

export const useHeader = () => {
  const { isMobile } = useMyMediaQuery();

  return { isMobile };
};
