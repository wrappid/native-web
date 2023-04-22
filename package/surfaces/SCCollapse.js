import React from "react";
import styled from "styled-components";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";
import { Collapse } from "@mui/material";

const defaultStyleClasses = [];

export const SCCollapse = styled(
  Collapse,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
