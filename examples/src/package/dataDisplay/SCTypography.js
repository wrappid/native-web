import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TYPOGRAPHY];

export const SCTypography = styled(
  Typography,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
