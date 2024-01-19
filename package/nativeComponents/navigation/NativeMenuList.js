// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCMenuList } from "../../styledComponents/navigation/SCMenuList";

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
