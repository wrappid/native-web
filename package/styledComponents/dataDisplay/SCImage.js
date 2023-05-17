import styled from "styled-components";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.IMAGE];

function getEffectiveStyleNative(styleClasses) {
  return getEffectiveStyle(styleClasses, "mobile", "paper");
}

export const SCImage = styled(
  "img",
  {}
)((props) => ({
  ...getEffectiveStyleNative([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
