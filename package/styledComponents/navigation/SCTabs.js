import React from "react";
import styled from "styled-components";
import { Tabs } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.NAVIGATION.TABS];

export const SCTabs = styled(
  Tabs,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
