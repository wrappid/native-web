import React from "react";
import styled from "styled-components";
import { DialogTitle } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_TITLE];

export const SCDialogTitle = styled(
  DialogTitle,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
