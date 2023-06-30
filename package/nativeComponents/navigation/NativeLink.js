import React from "react";

import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypography from '../dataDisplay/NativeTypography';

export default function NativeLink(props) {
  const { title, titlePlacement = "top", size = "small", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCLink {...restProps} underline="none">
            <NativeTypography>{restProps.children}</NativeTypography>
          </SCLink>
        </NativeTooltip>
      ) : (
        <SCLink {...restProps} underline="none">
          <NativeTypography>{restProps.children}</NativeTypography>
        </SCLink>
      )}
    </>
  );
}
