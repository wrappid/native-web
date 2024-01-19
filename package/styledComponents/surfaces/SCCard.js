// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Card } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD];

export const SCCard = styled(
  Card,
  {}
)((props) => ({
  width: "100%",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
