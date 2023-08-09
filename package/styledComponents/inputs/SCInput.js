import React from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];
export const SCInput = styled(
  Input,
  {}
)((props) => ({
  ':before': {
    borderBottom: '2px solid white'
  },
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
