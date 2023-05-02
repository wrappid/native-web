import React from "react";
import styled from "styled-components";
import { ListItemButton } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.ITEM_BUTTON];

export const SCListItemButton = styled(
  ListItemButton,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
