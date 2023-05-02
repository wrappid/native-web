import React from "react";

import { SCCardHeader } from "../../styledComponents/surfaces/SCCardHeader";

export default function NativeCardHeader(props) {
  return <SCCardHeader {...props}>{props.children}</SCCardHeader>;
}
