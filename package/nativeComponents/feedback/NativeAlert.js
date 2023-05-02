import React from "react";
import { SCAlert } from "../../styledComponents/feedback/SCAlert";

export default function NativeAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}
