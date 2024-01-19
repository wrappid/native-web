// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTableRow from "./NativeTableRow";

export default function NativeTableHeadRow(props) {
  return <NativeTableRow {...props}>{props.children}</NativeTableRow>;
}
