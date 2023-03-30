import React from "react";
import styled from "styled-components";
import { FormControlLabel } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FORM.FORM_CONTROL_LABEL];

export const SCFormGroup = styled(
  FormControlLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
