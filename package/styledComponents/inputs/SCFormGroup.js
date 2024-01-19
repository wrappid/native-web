// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { FormGroup } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.FORM.FORM_GROUP];

export const SCFormGroup = styled(
  FormGroup,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
