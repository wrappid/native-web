// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Box } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.BOX];

export const SCBox = styled(
  Box,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
