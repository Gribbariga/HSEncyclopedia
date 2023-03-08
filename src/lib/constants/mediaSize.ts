import { themeObj } from "../../theme/themeObj";

const { media } = themeObj;
const { large, small, medium, moreMedium, extraLarge, extraMedium } = media;
export const device = {
  mobile: small,
  tablet: medium,
  largeTable: extraMedium,
  laptop: large,
  desktop: extraLarge,
};
