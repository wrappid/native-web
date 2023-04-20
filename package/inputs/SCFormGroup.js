import React from "react";
import styled from "styled-components";
import { FormGroup } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FORM.FORM_GROUP];

export const SCFormGroup = styled(
  FormGroup,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
