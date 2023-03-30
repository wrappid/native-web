import React from "react";
import styled from "styled-components";
import { MenuList } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.MENU_LIST];

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
