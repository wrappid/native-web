import React from "react";
import styled from "styled-components";
import { ListItemIcon } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.LIST_ITEM_ICON];

export const SCListItemIcon = styled(
  ListItemIcon,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
