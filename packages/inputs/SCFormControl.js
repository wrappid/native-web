import styled from "styled-components";
import { FormControl } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FORM_CONTROL];

export const SCFormControl = styled(
  FormControl,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
