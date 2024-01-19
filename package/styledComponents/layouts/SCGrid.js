// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Grid } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {}
)(({ styleClasses }) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]) }));
