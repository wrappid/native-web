import React from "react";
import styled from "styled-components";
import MuiDrawer from "@mui/material/Drawer";
import { getEffectiveStyle, StyledComponentsClasses, getConfigurationObject } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.DRAWER];
const config = getConfigurationObject()?.wrappid
const DEFAULT_DRAWER_WIDTH = 240
export const DEFAULT_MINI_DRAWER_WIDTH = 56


const openedMixin = (theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  width: config?.drawerWidth  || DEFAULT_DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  width: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up("sm")]: {
    width: config?.miniDrawerWidth || DEFAULT_MINI_DRAWER_WIDTH,
  },
});

export const SCDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
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
