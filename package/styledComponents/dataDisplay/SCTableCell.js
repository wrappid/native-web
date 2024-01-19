// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { TableCell } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.TABLE_CELL];

export const SCTableCell = styled(
  TableCell,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
