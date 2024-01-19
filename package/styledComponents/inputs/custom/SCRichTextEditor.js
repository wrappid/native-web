// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";
import JoditEditor from "jodit-react";
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
  JoditEditor,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
