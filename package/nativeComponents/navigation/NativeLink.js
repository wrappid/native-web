import React from "react";

import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypographyCaption from "../dataDisplay/paragraph/NativeTypographyCaption";
import { CoreClasses } from "@wrappid/core";

export default function NativeLink(props) {
  const { title, titlePlacement = "top", size = "small", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCLink {...restProps} underline="none">
            <NativeTypographyCaption
              styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
            >
              {restProps.children}
            </NativeTypographyCaption>
          </SCLink>
        </NativeTooltip>
      ) : (
        <SCLink {...restProps} underline="none">
          <NativeTypographyCaption
            styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
          >
            {restProps.children}
          </NativeTypographyCaption>
        </SCLink>
      )}
    </>
  );
}
