// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { MenuItem } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.MENU_ITEM];

export const SCMenuItem = styled(
  MenuItem,
  {}
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
