import React from "react";
import styled from "styled-components";
import { FormControlLabel } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FORM_CONTROL_LABEL];

export const SCFormControlLabel = styled(
  FormControlLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
