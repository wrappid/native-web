import styled from "styled-components";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.IMAGE];

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
