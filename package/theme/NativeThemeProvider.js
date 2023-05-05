import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

export default function NativeThemeProvider(props) {
  return (
    <ThemeProvider theme={createTheme(props.theme)}>
      {props.children}
    </ThemeProvider>
  );
}
