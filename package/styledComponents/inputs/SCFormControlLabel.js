// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { FormControlLabel } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.FORM_CONTROL_LABEL];

export const SCFormControlLabel = styled(
  FormControlLabel,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
