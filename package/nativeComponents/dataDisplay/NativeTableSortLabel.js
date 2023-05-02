import React from "react";
import { SCTableSortLabel } from "../../styledComponents/dataDisplay/SCTableRow";

export default function NativeTableSortLabel(props) {
  return <SCTableSortLabel {...props}>{props.children}</SCTableSortLabel>;
}
