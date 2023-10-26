import React from "react";
import styled from "styled-components";
import { AvatarGroup } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.AVATAR_GROUP];

export const SCAvatarGroup = styled(
  AvatarGroup,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
