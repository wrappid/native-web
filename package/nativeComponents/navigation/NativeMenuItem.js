import React from "react";

import { SCMenuItem } from "../../styledComponents/navigation/SCMenuItem";

export default function NativeMenuItem(props) {
  return (
    <SCMenuItem {...props} underline="none">
      {props.children}
    </SCMenuItem>
  );
}
