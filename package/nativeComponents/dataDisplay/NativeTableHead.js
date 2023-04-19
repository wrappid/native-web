import React from "react";
import { SCTableHead } from "../../dataDisplay/SCTableHead";

export default function NativeTableHead(props) {
  return <SCTableHead {...props}>{props.children}</SCTableHead>;
}
