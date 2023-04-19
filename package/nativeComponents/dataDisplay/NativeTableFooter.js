import React from "react";
import { SCTableFooter } from "../../dataDisplay/SCTableFooter";

export default function NativeTableFooter(props) {
  return <SCTableFooter {...props}>{props.children}</SCTableFooter>;
}
