// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCMenuItem } from "../../styledComponents/inputs/SCMenuItem";

export default function NativeMenuItem(props) {
  return <SCMenuItem {...props}>{props.children}</SCMenuItem>;
}
