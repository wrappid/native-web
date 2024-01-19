// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { ListItem } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.LIST_ITEM];

export const SCListItem = styled(
  ListItem,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
