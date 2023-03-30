import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.CIRCULAR_PROGRESS];

export const SCCircularProgress = styled(
  CircularProgress,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
