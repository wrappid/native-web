// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CardMedia } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_MEDIA];

export const SCCardMedia = styled(
  CardMedia,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
