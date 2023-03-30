import React from "react";
import styled from "styled-components";
import { CardHeader } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_HEADER];

export const SCCardHeader = styled(
  CardHeader,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
