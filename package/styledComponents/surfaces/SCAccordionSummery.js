// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { AccordionSummary } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.ACCORDION_SUMMERY];

export const SCAccordionSummery = styled(
  AccordionSummary,
  {}
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
  "& .MuiAccordionSummary-content": { margin: "8px 0 !important" }, // Removes default top and bottom 12px margin to 8px of summary content
  minHeight                       : "unset !important", // Remove default min-height of 48px
}));
