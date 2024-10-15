// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Card } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD];

export const SCToolBox = styled(Card, {})((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
  maxHeight: "40vh", // Hardcoded max height
  maxWidth : "60vh", // Hardcoded max width
  minWidth : "10%", // Hardcoded min width
  resize   : props.resize || "none",
}));
