import React from "react";

import { SCCardActions } from "../../surfaces/SCCardActions";

export default function NativeCardActions(props) {
  return <SCCardActions {...props}>{props.children}</SCCardActions>;
}
