// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { AvatarGroup } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.AVATAR_GROUP];

export const SCAvatarGroup = styled(
  AvatarGroup,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
