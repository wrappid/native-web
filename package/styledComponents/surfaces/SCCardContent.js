import React from "react";
import styled from "styled-components";
import { CardContent } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_CONTENT];

export const SCCardContent = styled(
  CardContent,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
