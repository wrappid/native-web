import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {}
)(({ styleClasses }) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
