// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Checkbox } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CHECKBOX];

export const SCCheckbox = styled(
  Checkbox,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
