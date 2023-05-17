import React from "react";
import styled from "@mui/material/styles";
import { CardActionArea } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_ACTION_AREA];

export const SCCardActionArea = styled(
  CardActionArea,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
