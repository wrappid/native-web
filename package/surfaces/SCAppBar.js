// import { styled } from "@mui/material";
import styled from "styled-components";
import MuiAppBar from "@mui/material/AppBar";
import CoreClasses from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.APP_BAR];

export const SCAppBar = styled(MuiAppBar, {
  // shouldForwardProp: (prop) => prop !== "open",
})((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
