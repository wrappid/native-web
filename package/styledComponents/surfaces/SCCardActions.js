// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CardActions } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_ACTIONS];

export const SCCardActions = styled(
  CardActions,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
