import React from "react";
import styled from "styled-components";
import { Toolbar } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.TOOLBAR];

export const SCToolbar = styled(
  Toolbar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
