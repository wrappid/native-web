import React from "react";
import styled from "@mui/material/styles";
import { Input } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.DATE_PICKER];

export const SCDatePicker = styled(
  DesktopDatePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
