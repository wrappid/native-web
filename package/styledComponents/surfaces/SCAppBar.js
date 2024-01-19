// import { styled } from "@mui/material";
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import MuiAppBar from "@mui/material/AppBar";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.APP_BAR];

export const SCAppBar = styled(MuiAppBar, {})((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
