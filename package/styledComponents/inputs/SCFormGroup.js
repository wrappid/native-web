import React from "react";
import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FORM.FORM_GROUP];

export const SCFormGroup = styled(
  FormGroup,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
