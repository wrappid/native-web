// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { useTheme } from "@mui/material/styles";
// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, WrappidDataContext, getEffectiveStyle } from "@wrappid/styles";

import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";

export default function NativeDrawer(props) {
  const { config } = React.useContext(WrappidDataContext);
  const materialTheme = useTheme();

  return (
    <SCDrawer
      {...props}
      config={config}
      theme={materialTheme}
      PaperProps={{ sx: { ...getEffectiveStyle([StyledComponentsClasses.DRAWER.PAPER_HEIGHT]) } }}
    >
      {props.children}
    </SCDrawer>
  );
}
