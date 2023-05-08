import React from "react";
import NativeTableCell from "./NativeTableCell";

export default function NativeTableHeadCell(props) {
  return (
    <NativeTableCell
      {...props}
    >
      {props.children}
    </NativeTableCell>
  );
}
