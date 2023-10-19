import React from "react";
import styled from "styled-components";
import { AlertTitle } from '@mui/material';
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.ALERT];

export const SCAlert = styled(
  AlertTitle,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
