import JoditEditor from "jodit-react";
import styled from "styled-components";
import CoreClasses from "../@wrappid/styles";
import { getEffectiveStyle } from "../@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
  JoditEditor,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
