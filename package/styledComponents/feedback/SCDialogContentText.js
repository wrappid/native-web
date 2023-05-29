import React from "react";
import styled from "styled-components";
import { DialogContentText } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_CONTENT_TEXT];

export const SCDialogContentText = styled(
  DialogContentText,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
