import React from "react";

import { SCMenuList } from "../../styledComponents/navigation/SCMenuList";

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
