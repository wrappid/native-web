import React from "react";
import { SCFade } from "../../utils/SCFade";

export default function NativeFade(props) {
  return <SCFade {...props}>{props.children}</SCFade>;
}
