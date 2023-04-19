import React from "react";

import { SCContainer } from "../../layouts/SCContainer";

export default function NativeContainer(props) {
  return <SCContainer {...props}>{props.children}</SCContainer>;
}
