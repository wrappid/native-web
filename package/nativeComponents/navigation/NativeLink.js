import React from "react";

import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypographyCaption from '../dataDisplay/NativeTypographyCaption';

export default function NativeLink(props) {
  const { title, titlePlacement = "top", size = "small", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCLink {...restProps} underline="none">
            <NativeTypographyCaption>{restProps.children}</NativeTypographyCaption>
          </SCLink>
        </NativeTooltip>
      ) : (
        <SCLink {...restProps} underline="none">
          <NativeTypographyCaption>{restProps.children}</NativeTypographyCaption>
        </SCLink>
      )}
    </>
  );
}
