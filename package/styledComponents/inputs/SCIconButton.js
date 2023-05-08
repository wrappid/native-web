import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.ICON_BUTTON];

export const SCIconButton = styled(
  IconButton,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
