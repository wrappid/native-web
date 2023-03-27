import styled from "styled-components";
import MuiDrawer from "@mui/material/Drawer";
import config from "../../../config/config";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";
import { theme } from "../../styles/theme/theme";

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.DRAWER];

const openedMixin = (theme) => ({
  ...getEffectiveStyle(CoreClasses.APP.APPBAR_HEIGHT),
  width: config.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  ...getEffectiveStyle(CoreClasses.APP.APPBAR_HEIGHT),
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
})(({ open }) => ({
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
