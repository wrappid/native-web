import React from "react";
import { styled } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.FORM_CONTROL_LABEL];

export const SCFormControlLabel = styled(
  FormControlLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
