import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
/**
 * @todo config from core to be used
 */
import config from "../../config";

export const SCRightDrawer = styled(
  MuiDrawer,
  {}
)((props) => ({
  width: props.open ? config.drawerWidth : 0,
  "& .MuiDrawer-paper": { width: config.drawerWidth },
  ...getEffectiveStyle([
    StyledComponentsClasses.APPBAR_HEIGHT,
    ...(props?.styleClasses || []),
  ]),
}));
