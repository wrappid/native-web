import React from "react";
import { SCToolbar } from "../../styledComponents/surfaces/SCToolbar";

export default function NativeToolBar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}
