// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCMenuItem } from "../../styledComponents/navigation/SCMenuItem";

export default function NativeMenuItem(props) {
  return (
    <SCMenuItem {...props} underline="none">
      {props.children}
    </SCMenuItem>
  );
}
