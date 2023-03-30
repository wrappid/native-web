import React from "react";
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.LINEAR_PROGRESS];

export const SCLinearProgress = styled(
  LinearProgress,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
