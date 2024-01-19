// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { DialogContentText } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_CONTENT_TEXT];

export const SCDialogContentText = styled(
  DialogContentText,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
