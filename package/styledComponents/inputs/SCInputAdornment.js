import React from "react";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT_ADORNMENT];

export const SCInputAdornment = styled(
  InputAdornment,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
