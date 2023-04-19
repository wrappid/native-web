import React from "react";

import { SCCardHeader } from "../../surfaces/SCCardHeader";

export default function NativeCardHeader(props) {
  return <SCCardHeader {...props}>{props.children}</SCCardHeader>;
}
