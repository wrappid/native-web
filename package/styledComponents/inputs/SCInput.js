import React from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];
export const SCInput = styled(
  Input,
  {}
)((props) => ({
  '&.MuiInputBase-root':{
    ':before':{
      borderBottomColor: props?.theme?.palette?.primary?.main,
    }
  },
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
