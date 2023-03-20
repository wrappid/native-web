import styled from "styled-components";
import { Backdrop } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";
import { theme } from "../../styles/theme/theme";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Backdrop,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
