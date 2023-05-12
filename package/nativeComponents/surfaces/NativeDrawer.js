import React from "react";
import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";
import { useTheme } from "@mui/material/styles";

export default function NativeDrawer(props) {
  const materialTheme = useTheme();
  return (
    <SCDrawer
      {...props}
      theme={materialTheme}
      PaperProps={{
        sx: {
          ...getEffectiveStyle([StyledComponentsClasses.DRAWER.PAPER_HEIGHT]),
        },
      }}
    >
      {props.children}
    </SCDrawer>
  );
}
