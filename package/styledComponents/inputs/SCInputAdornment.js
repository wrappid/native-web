// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { InputAdornment } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT_ADORNMENT];

export const SCInputAdornment = styled(
  InputAdornment,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
