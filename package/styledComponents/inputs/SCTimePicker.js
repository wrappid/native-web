// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { TimePicker } from "@mui/x-date-pickers";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.TIME_PICKER];

export const SCTimePicker = styled(
  TimePicker,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
