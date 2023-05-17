import React from "react";
import { styled } from "@mui/material/styles";
import { Input } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];
export const SCInput = styled(
  Input,
  {}
)(() => ({
  // ...getEffectiveStyle([
  //   ...defaultStyleClasses,
  //   ...(props?.styleClasses || []),
  // ]),
}));
