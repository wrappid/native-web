import React from "react";
import styled from "styled-components";
import { Snackbar } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.SNACKBAR];

export const SCSnackbar = styled(
  Snackbar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
