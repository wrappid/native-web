import React from "react";
import styled from "styled-components";
import { ListItem } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.LIST_ITEM];

export const SCListItem = styled(
  ListItem,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
