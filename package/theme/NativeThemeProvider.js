import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

export default function CoreThemeProvider(props) {
  /**
   * @todo should be able to handle ap and web
   */
  return (
    <ThemeProvider theme={createTheme(theme)}>{props.children}</ThemeProvider>
  );
}
