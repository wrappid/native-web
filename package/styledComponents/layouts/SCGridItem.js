import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID_ITEM];

export const SCGridItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  ...getEffectiveStyle([...defaultStyleClasses]),
}));
