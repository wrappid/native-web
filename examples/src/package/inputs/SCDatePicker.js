import React from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.DATE_PICKER];

export const SCDatePicker = styled(
  DesktopDatePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
