import React from "react";
import styled from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.ITEM_BUTTON];

export const SCListItemButton = styled(
  ListItemButton,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
