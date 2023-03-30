import React from "react";
import styled from "styled-components";
import { ListItemText } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.LIST_ITEM_TEXT];

export const SCListItemText = styled(
  ListItemText,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
