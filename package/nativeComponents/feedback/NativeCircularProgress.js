import React from "react";
import { SCCircularProgress } from "../../../styledComponents/feedback/SCCircularProgress";

export default function NativeCircularProgress(props) {
  return <SCCircularProgress {...props}>{props.children}</SCCircularProgress>;
}
