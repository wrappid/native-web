import React from "react";
import styled from "styled-components";
import { Accordion } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION];

export const SCAccordion = styled(
  Accordion,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
