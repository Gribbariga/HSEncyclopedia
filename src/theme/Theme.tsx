import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { themeObj } from "./themeObj";

interface IThemeProps {
  children: React.ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>;
};

export default Theme;
