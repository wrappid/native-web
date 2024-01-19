// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableCell } from "../../styledComponents/dataDisplay/SCTableCell";

export default function NativeTableCell(props) {
  const { ...restProps } = props;

  return <SCTableCell {...restProps}>{props.children}</SCTableCell>;
}
