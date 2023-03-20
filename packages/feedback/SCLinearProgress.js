import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.LINEAR_PROGRESS];

export const SCLinearProgress = styled(
  LinearProgress,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
