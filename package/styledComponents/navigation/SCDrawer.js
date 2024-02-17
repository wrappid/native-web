// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import MuiDrawer from "@mui/material/Drawer";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses, getConfigurationObject } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.DRAWER];
const config = getConfigurationObject()?.wrappid;

export const DEFAULT_DRAWER_WIDTH = 240;

export const DEFAULT_MINI_DRAWER_WIDTH = 56;

const openedMixin = (theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.enteringScreen,
    easing  : theme.transitions.easing.sharp,
  }),
  width: config?.drawerWidth || DEFAULT_DRAWER_WIDTH,
});

const closedMixin = (theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.leavingScreen,
    easing  : theme.transitions.easing.sharp,
  }),
  width                       : 0,
  [theme.breakpoints.up("sm")]: { width: config?.miniDrawerWidth || DEFAULT_MINI_DRAWER_WIDTH },
});

export const SCDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ open, theme }) => ({
  /**
   * @todo
   * Must support external styleClasses through props
   */
  ...getEffectiveStyle([...defaultStyleClasses]),
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
