import React from "react";
import styled from "styled-components";
import { TableBody } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_BODY];

export const SCTableBody = styled(
  TableBody,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
