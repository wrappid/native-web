import React from "react";
import styled from "styled-components";
import { TableSortLabel } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.TABLE_SORT_LABEL];

export const SCTableSortLabel = styled(
  TableSortLabel,
  {}
)((props) => ({
  padding: 2,
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
