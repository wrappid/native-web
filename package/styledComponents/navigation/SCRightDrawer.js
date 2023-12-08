import React from "react";
import styled from "styled-components";
import MuiDrawer from "@mui/material/Drawer";
import { getEffectiveStyle, StyledComponentsClasses, getConfigurationObject } from "@wrappid/styles";
import { DEFAULT_MINI_DRAWER_WIDTH } from "./SCDrawer";
const config = getConfigurationObject()?.wrappid

export const SCRightDrawer = styled(
  MuiDrawer,
  {}
)((props) => ({
  width: props.open ? config.drawerWidth || DEFAULT_MINI_DRAWER_WIDTH : 0,
  "& .MuiDrawer-paper": { width: config.drawerWidth || DEFAULT_MINI_DRAWER_WIDTH },
  ...getEffectiveStyle([
    StyledComponentsClasses.APPBAR_HEIGHT,
    ...(props?.styleClasses || []),
  ]),
}));
