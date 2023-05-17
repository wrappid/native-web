import JoditEditor from "jodit-react";
import React from "react";
import { styled } from "@mui/material/styles";
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
  JoditEditor,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
