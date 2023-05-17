import React from "react";
import styled from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
/**
 * @todo config from core to be used
 */
import config from "../../config";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.DRAWER];

const openedMixin = (theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  width: config.drawerWidth,
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
    width: config.miniDrawerWidth,
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
