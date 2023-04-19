import React from "react";
import NativeTableCell from "./NativeTableCell/NativeTableCell";

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
      {/* <NativeTypographyBody1 lineLimit={2}>{props.children}</NativeTypographyBody1> */}
      {props.children}
    </NativeTableCell>
  );
}
