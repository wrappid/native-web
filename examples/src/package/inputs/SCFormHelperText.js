import React from "react";
import styled from "styled-components";
import { FormHelperText } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FORM_HELPER_TEXT];

export const SCFormHelperText = styled(
  FormHelperText,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
