import styled from "styled-components";
import { AccordionDetails } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION_DETAILS];

export const SCAccordionDetail = styled(
  AccordionDetails,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
