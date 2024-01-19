// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Collapse } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [];

export const SCCollapse = styled(
  Collapse,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
