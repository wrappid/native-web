import React from "react";
import styled from "@mui/material/styles";
import { CardHeader } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_HEADER];

export const SCCardHeader = styled(
  CardHeader,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
