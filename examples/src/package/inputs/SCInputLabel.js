import React from "react";
import styled from "styled-components";
import { InputLabel } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT_LABEL];

export const SCInputLabel = styled(
  InputLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
