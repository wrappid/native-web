// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCList } from "../../styledComponents/layouts/SCList";

export default function NativeList(props) {
  return <SCList {...props}>{props.children}</SCList>;
}
