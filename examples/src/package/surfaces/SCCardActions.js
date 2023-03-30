import React from "react";
import styled from "styled-components";
import { CardActions } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_ACTIONS];

export const SCCardActions = styled(
  CardActions,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
