// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import MuiDrawer from "@mui/material/Drawer";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses, getConfigurationObject } from "@wrappid/styles";
import styled from "styled-components";

import { DEFAULT_DRAWER_WIDTH } from "./SCDrawer";
const config = getConfigurationObject()?.wrappid;

export const SCRightDrawer = styled(
  MuiDrawer,
  {}
)((props) => ({
  "& .MuiDrawer-paper": { width: config?.drawerWidth || DEFAULT_DRAWER_WIDTH },
  width               : props?.open ? config?.drawerWidth || DEFAULT_DRAWER_WIDTH : 0,
  ...getEffectiveStyle([StyledComponentsClasses.APPBAR_HEIGHT, ...(props?.styleClasses || [])]),
}));
