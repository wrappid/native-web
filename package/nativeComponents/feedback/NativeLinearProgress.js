import React from "react";
import { SCLinearProgress } from "../../feedback/SCLinearProgress";

export default function NativeLinearProgress(props) {
  return <SCLinearProgress {...props}>{props.children}</SCLinearProgress>;
}
