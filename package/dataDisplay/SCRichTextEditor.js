import JoditEditor from "jodit-react";
import styled from "styled-components";

import CoreClasses from "../../../styles/CoreClasses";
import { getEffectiveStyle } from "../../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
    JoditEditor,
    {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));