// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports

import MuiDrawer from "@mui/material/Drawer";
// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, WrappidData, getEffectiveStyle } from "@wrappid/styles";
import styled from "styled-components";

import { DEFAULT_DRAWER_WIDTH } from "./SCDrawer";
const { config } = WrappidData;

export const SCRightDrawer = styled(
  MuiDrawer,
  {}
)((props) => ({
  "& .MuiDrawer-paper": { width: config?.drawerWidth || DEFAULT_DRAWER_WIDTH },
  width               : props?.open ? config?.drawerWidth || DEFAULT_DRAWER_WIDTH : 0,
  ...getEffectiveStyle([StyledComponentsClasses.APPBAR_HEIGHT, ...(props?.styleClasses || [])]),
}));
