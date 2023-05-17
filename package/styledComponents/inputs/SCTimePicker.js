import React from "react";
import styled from "@mui/material/styles";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TimePicker } from "@mui/x-date-pickers";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.TIME_PICKER];

export const SCTimePicker = styled(
  TimePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
