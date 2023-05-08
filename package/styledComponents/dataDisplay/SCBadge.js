import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.BADGE];

export const SCBadge = styled(
  Badge,
  {}
)(({ props }) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
