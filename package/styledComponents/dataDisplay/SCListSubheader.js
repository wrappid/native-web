import React from "react";
import styled from "styled-components";
import { ListSubheader } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.LIST_ITEM_SUBHEADER];

export const SCListSubheader = styled(
  ListSubheader,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));