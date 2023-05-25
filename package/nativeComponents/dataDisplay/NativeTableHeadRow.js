import React from "react";
import NativeTableRow from "./NativeTableRow";

export default function NativeTableHeadRow(props) {
  return <NativeTableRow {...props}>{props.children}</NativeTableRow>;
}
