import React from "react";
import styled from "styled-components";
import { InputAdornment } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT_ADORNMENT];

export const SCInputAdornment = styled(
  InputAdornment,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
