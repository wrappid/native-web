import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.SKELETON];

export const SCSkeleton = styled(
  Skeleton,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
