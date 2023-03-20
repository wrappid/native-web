import styled from "styled-components";
import { Button } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.BUTTON];

export const SCButton = styled(
  Button,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
