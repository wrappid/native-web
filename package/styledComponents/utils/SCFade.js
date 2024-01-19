// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Fade } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.UTILS.FADE];

export const SCFade = styled(
  Fade,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
