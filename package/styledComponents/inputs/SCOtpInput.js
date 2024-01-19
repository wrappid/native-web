// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { MuiOtpInput } from "mui-one-time-password-input";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];

export const SCOtpInput = styled(
  MuiOtpInput,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
