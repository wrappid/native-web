// import { styled } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MuiAppBar from "@mui/material/AppBar";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.APP_BAR];

export const SCAppBar = styled(MuiAppBar, {
  // shouldForwardProp: (prop) => prop !== "open",
})((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
