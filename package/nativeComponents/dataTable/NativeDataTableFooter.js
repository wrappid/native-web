import React from "react";
import NativeTableCell from "../dataDisplay/NativeTableCell";
import NativeTableFooter from "../dataDisplay/NativeTableFooter";
import NativeTableRow from "../dataDisplay/NativeTableRow";

export default function NativeDataTableFooter(props) {
  return (
    <NativeTableFooter>
      <NativeTableRow>
        <NativeTableCell>Table Footer</NativeTableCell>
      </NativeTableRow>
    </NativeTableFooter>
  );
}
