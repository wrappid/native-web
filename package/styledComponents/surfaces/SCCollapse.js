import React from "react";
import { styled } from "@mui/material/styles";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Collapse } from "@mui/material";

const defaultStyleClasses = [];

export const SCCollapse = styled(
  Collapse,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
