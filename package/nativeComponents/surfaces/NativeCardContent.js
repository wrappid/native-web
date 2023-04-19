import React from "react";

import { SCCardContent } from "../../surfaces/SCCardContent";

export default function NativeCardContent(props) {
  return <SCCardContent {...props}>{props.children}</SCCardContent>;
}
