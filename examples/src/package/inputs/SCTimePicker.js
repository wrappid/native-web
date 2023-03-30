import React from "react";
import styled from "styled-components";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";
import { TimePicker } from "@mui/x-date-pickers";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.TIME_PICKER];

export const SCTimePicker = styled(
  TimePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
