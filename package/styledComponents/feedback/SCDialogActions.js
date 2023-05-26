import React from "react";
import styled from "styled-components/native";
import { DialogActions } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_ACTIONS];

export const SCDialogActions = styled(
  DialogActions,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
