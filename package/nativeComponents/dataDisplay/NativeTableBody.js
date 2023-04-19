import React from "react";
import { SCTableBody } from "../../dataDisplay/SCTableBody";

export default function NativeTableBody(props) {
  return <SCTableBody {...props}>{props.children}</SCTableBody>;
}
