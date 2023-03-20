import styled from "styled-components";
import { FormControlLabel } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FORM_CONTROL_LABEL];

export const SCFormControlLabel = styled(
  FormControlLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
