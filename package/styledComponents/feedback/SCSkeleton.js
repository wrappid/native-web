import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.SKELETON];

export const SCSkeleton = styled(
  Skeleton,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
