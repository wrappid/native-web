import React from "react";
import styled from "styled-components";
import { AccordionDetails } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.ACCORDION_DETAILS];

export const SCAccordionDetail = styled(
  AccordionDetails,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
