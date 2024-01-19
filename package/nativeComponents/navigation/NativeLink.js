// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";

export default function NativeLink(props) {
  // eslint-disable-next-line no-unused-vars
  const { title, titlePlacement = "top", size = "small", ...restProps } = props;
  const newTabFlag = restProps?.href?.includes("http") ? true : false;

  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCLink
            {...restProps}
            underline="none"
            target={newTabFlag ? "_blank" : ""}
            rel={newTabFlag ? "noreferrer" : ""}>
            {restProps.children}
          </SCLink>
        </NativeTooltip>
      ) : (
        <SCLink
          {...restProps}
          underline="none"
          target={newTabFlag ? "_blank" : ""}
          rel={newTabFlag ? "noreferrer" : ""}>
          {restProps.children}
        </SCLink>
      )}
    </>
  );
}
