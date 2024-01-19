// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Input } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];

export const SCInput = styled(
  Input,
  {}
)((props) => ({
  "&.MuiInputBase-root": { ":before": { borderBottomColor: props?.theme?.palette?.text?.primary } },
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
