import React from "react";
import styled from "@mui/material/styles";
import { InputLabel } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT_LABEL];

export const SCInputLabel = styled(
  InputLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
