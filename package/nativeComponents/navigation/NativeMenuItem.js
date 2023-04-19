import React from "react";

import { SCMenuItem } from "../../navigation/SCMenuItem";

export default function NativeMenuItem(props) {
  return (
    <SCMenuItem {...props} underline="none">
      {props.children}
    </SCMenuItem>
  );
}
