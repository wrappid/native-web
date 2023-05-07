import React from "react";
import { getUUID } from "../../helper/appUtils";
import { SCPopover } from "../../styledComponents/utils/SCPopover";

export default function NativePopover(props) {
  const {
    // popover property
    id = getUUID(),
    // content
    headerComponent,
    children,
    footerComponent,
    ...restProps
  } = props;
  return (
    <SCPopover
      id={id}
      {...restProps}
    >
      {children}
    </SCPopover>
  );
}
