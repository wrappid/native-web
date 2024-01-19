// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CircularProgress } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.CIRCULAR_PROGRESS];

export const SCCircularProgress = styled(
  CircularProgress,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
