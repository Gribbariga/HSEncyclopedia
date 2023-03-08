import useMediaQuery from "@mui/material/useMediaQuery";

import { themeObj } from "../theme/themeObj";
const { media } = themeObj;
const { large, small, medium, moreMedium, extraLarge, extraMedium } = media;
export function useMyMediaQuery() {
  const isMobile = useMediaQuery(small) ? small : false;
  const isTable = useMediaQuery(medium) ? medium : false;
  const isLargeTable = useMediaQuery(extraMedium) ? extraMedium : false;
  const isLaptop = useMediaQuery(large) ? large : false;
  const isDesktop = useMediaQuery(extraLarge) ? extraLarge : false;

  return { isTable, isMobile, isLaptop, isDesktop, isLargeTable };
}
