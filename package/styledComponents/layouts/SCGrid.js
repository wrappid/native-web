import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {}
)(({ styleClasses }) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
