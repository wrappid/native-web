import React from "react";
import styled from "styled-components";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.DATE_TIME_PICKER];

export const SCDateTimePicker = styled(
  DesktopDateTimePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
