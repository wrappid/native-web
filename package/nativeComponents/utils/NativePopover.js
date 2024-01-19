// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { getUUID } from "../../helper/appUtils";
import { SCPopover } from "../../styledComponents/utils/SCPopover";

export default function NativePopover(props) {
  const {
    // popover property
    id = getUUID(),
    // content
    // eslint-disable-next-line no-unused-vars
    headerComponent,
    children,
    // eslint-disable-next-line no-unused-vars
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
