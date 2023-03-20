import styled from "styled-components";
import { Chip } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.CHIP];

export const SCChip = styled(
  Chip,
  {}
)(({ props }) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
