import React from "react";
import styled from "styled-components";
import { ListItemAvatar } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.LIST_ITEM_AVATAR];

export const SCListItemAvatar = styled(
  ListItemAvatar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
