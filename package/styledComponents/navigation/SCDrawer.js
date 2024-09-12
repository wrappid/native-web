// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports

import MuiDrawer from "@mui/material/Drawer";
// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.DRAWER];

export const DEFAULT_DRAWER_WIDTH = 240;

export const DEFAULT_MINI_DRAWER_WIDTH = 56;

const openedMixin = (config, theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.enteringScreen,
    easing  : theme.transitions.easing.sharp,
  }),
  width: config?.drawerWidth || DEFAULT_DRAWER_WIDTH,
});

const closedMixin = (config, theme) => ({
  ...getEffectiveStyle(StyledComponentsClasses.APP_BAR.HEIGHT),
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.leavingScreen,
    easing  : theme.transitions.easing.sharp,
  }),
  width                       : 0,
  [theme.breakpoints.up("sm")]: { width: `${config?.miniDrawerWidth || DEFAULT_MINI_DRAWER_WIDTH}px` },
});

export const SCDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ config, open, theme }) => ({
  /**
   * @todo
   * Must support external styleClasses through props
   */
  ...getEffectiveStyle([...defaultStyleClasses]),
  ...(open && {
    ...openedMixin(config, theme),
    "& .MuiDrawer-paper": openedMixin(config, theme),
  }),
  ...(!open && {
    ...closedMixin(config, theme),
    "& .MuiDrawer-paper": closedMixin(config, theme),
  }),
}));
