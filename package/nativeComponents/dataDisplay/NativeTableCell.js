import React from "react";
import { SCTableCell } from "../../dataDisplay/SCTableCell";

export default function NativeTableCell(props) {
  const { children, ...restProps } = props;
  return <SCTableCell {...restProps}>{props.children}</SCTableCell>;
}
