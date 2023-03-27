import styled from "styled-components";
import { Grid } from "@mui/material";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {}
)(({ styleClasses }) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
