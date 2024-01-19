// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Toolbar } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.TOOLBAR];

export const SCToolbar = styled(
  Toolbar,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
