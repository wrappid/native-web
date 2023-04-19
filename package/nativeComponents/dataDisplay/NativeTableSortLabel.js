import React from "react";
import { SCTableSortLabel } from "../../dataDisplay/SCTableRow";

export default function NativeTableSortLabel(props) {
  return <SCTableSortLabel {...props}>{props.children}</SCTableSortLabel>;
}
