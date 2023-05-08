import React from "react";
import styled from "styled-components";
import { ListItem } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.LIST_ITEM];

export const SCListItem = styled(
  ListItem,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
