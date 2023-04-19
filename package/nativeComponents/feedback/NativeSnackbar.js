import React from "react";
import { SCSnackbar } from "../../feedback/SCSnackbar";

export default function NativeSnackbar(props) {
  return <SCSnackbar {...props}>{props.children}</SCSnackbar>;
}
