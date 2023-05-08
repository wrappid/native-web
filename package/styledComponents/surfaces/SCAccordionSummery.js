import React from "react";
import styled from "styled-components";
import { AccordionSummary } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.ACCORDION_SUMMERY];

export const SCAccordionSummery = styled(
  AccordionSummary,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
