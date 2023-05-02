import { MuiOtpInput } from "mui-one-time-password-input";
import styled from "styled-components";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT];

export const SCOtpInput = styled(
  MuiOtpInput,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
