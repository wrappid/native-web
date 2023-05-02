import React from "react";
import styled from "styled-components";
import { Chip } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.CHIP];

export const SCChip = styled(
  Chip,
  {}
)(({ props }) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
