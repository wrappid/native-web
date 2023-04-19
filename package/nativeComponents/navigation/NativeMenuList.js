import React from "react";

import { SCMenuList } from "../../navigation/SCMenuList";

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
