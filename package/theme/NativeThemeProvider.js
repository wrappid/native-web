// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material";

export default function NativeThemeProvider(props) {
  return (
    <ThemeProvider theme={createTheme(props.theme)}>
      {props.children}
    </ThemeProvider>
  );
}
