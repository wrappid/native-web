import JoditEditor from "jodit-react";
import styled from "styled-components";

import { getEffectiveStyle } from "@wrappid/styles";
import { StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
    JoditEditor,
    {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));