import React from "react";
import styled from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.MENU_ITEM];

export const SCMenuItem = styled(
  MenuItem,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
