import React from "react";
import styled from "styled-components";
import { MenuList } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.MENU_LIST];

export const SCMenuList = styled(
  MenuList,
  {}
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
