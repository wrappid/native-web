import React from "react";

import { SCCollapse } from "../../styledComponents/surfaces/SCCollapse";

export default function NativeCollapse(props) {
  return <SCCollapse {...props}>{props.children}</SCCollapse>;
}
