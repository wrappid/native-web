import React from "react";
import styled from "styled-components";
import { ListItemIcon } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.LIST_ITEM_ICON];

export const SCListItemIcon = styled(
  ListItemIcon,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
