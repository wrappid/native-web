// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTableCell from "./NativeTableCell";

/**
 * @todo
 * after ellipsis support review
 *
 * @param {*} props
 * @returns
 */
export default function NativeTableBodyCell(props) {
  return (
    <NativeTableCell {...props}>
      {props.children}
    </NativeTableCell>
  );
}
