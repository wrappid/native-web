import React from "react";

import { SCListItem } from "../../layouts/SCListItem";

export default function NativeListItem(props) {
  return <SCListItem {...props}>{props.children}</SCListItem>;
}
