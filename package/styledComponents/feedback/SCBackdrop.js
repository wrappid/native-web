import React from "react";
import styled from "styled-components";
import { Backdrop } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Backdrop,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
