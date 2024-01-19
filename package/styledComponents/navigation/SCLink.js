// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Link } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.LINK];

export const SCLink = styled(
  Link,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
