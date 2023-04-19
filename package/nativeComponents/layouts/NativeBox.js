import React from "react";
import { SCBox } from "../../layouts/SCBox";

export default function NativeBox(props) {
  return <SCBox {...props}>{props.children}</SCBox>;
}
