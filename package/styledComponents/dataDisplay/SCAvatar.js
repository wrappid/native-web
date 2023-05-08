import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.AVATAR];

export const SCAvatar = styled(
  Avatar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
