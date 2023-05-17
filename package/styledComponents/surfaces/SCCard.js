import React from "react";
import styled from "styled-components";
import { Card } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD];

export const SCCard = styled(
  Card,
  {}
)((props) => ({
  width: "100%",
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
