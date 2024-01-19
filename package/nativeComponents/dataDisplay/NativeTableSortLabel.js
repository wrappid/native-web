// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableSortLabel } from "../../styledComponents/dataDisplay/SCTableSortLabel";

export default function NativeTableSortLabel(props) {
  return <SCTableSortLabel {...props}>{props.children}</SCTableSortLabel>;
}
