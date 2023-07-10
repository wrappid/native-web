import React from "react";
import { SCLinearProgress } from "../../styledComponents/feedback/SCLinearProgress";

export default function NativeLinearProgress(props) {
  return <SCLinearProgress color="success" {...props}>{props.children}</SCLinearProgress>;
}
