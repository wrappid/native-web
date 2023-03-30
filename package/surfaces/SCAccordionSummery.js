import styled from "styled-components";
import { AccordionSummary } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION_SUMMERY];

export const SCAccordionSummery = styled(
  AccordionSummary,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));