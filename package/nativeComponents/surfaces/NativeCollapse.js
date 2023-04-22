import React from "react";

import { SCCollapse } from "../../surfaces/SCCollapse";

export default function NativeCollapse(props) {
  return <SCCollapse {...props}>{props.children}</SCCollapse>;
}
