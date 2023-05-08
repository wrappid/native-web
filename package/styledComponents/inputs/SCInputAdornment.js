import React from "react";
import styled from "styled-components";
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
