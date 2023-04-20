import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeTableCell from "./NativeTableCell";

export default function NativeTableHeadCell(props) {
  return (
    <NativeTableCell
      {...props}
      styleClasses={[CoreClasses.TABLE.TH, ...(props?.styleClasses || [])]}
    >
      {props.children}
    </NativeTableCell>
  );
}
