// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { MuiColorInput } from "mui-color-input";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];

export const SCColorInput = styled(
  MuiColorInput,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
