// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.DATE_PICKER];

export const SCDatePicker = styled(
  /**
   * @todo review required by @sumanta-m 
   */
  DesktopDatePicker,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
