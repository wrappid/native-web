import React from "react";

import { SCTab } from "../../navigation/SCTab";

export default function NativeTab(props) {
  return <SCTab {...props}>{props.children}</SCTab>;
}
