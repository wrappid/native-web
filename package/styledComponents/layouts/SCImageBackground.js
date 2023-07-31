import React from "react";
import styled from "styled-components";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Box } from "@mui/material";

const defaultStyleClasses = [];

export const SCImageBackground = styled(
  Box,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
